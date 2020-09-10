import { ThemeIdentifier } from './theme.identifier';
import { Theme, ThemeVariables } from './theme.types';

const toKebabCase = (name): string => {
  return name
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
    .replace(/([A-Z])([A-Z])(?=[a-z])/g, '$1-$2')
    .toLowerCase();
};

export class ThemeVO {
  constructor(
    private readonly _id: ThemeIdentifier,
    private readonly _theme: Theme,
    private readonly _prefix: string = '--'
  ) {}

  get id(): string {
    return this._id;
  }

  get properties(): any {
    const variables = this._theme.variables;
    const properties = {};

    Object.keys(variables).forEach((section) => {
      Object.keys(variables[section]).forEach((variable) => {
        const value = variables[section][variable];
        if (section === 'color' && typeof value === 'object') {
          Object.keys(value).forEach((valueName) => {
            properties[
              this.formatColorVariableName(variable, valueName)
            ] = this.formatColorVariableValue(value[valueName]);
          });
        } else {
          properties[this.formatVariableName(section, variable)] = variables[section][variable];
        }
      });
    });

    return properties;
  }

  get variables(): ThemeVariables {
    return this._theme.variables;
  }

  toCSS(withComments = false, locale = 'en-US'): string {
    let rules: string[] = [];

    // We can't use google fonts for China, so disable web fonts for now
    if (locale !== 'zh-CN') {
      this._theme.fonts.forEach((fontFamily) => {
        const { url, subsets } = fontFamily;

        fontFamily.fonts.forEach((font) => {
          const local = font.local.map((name) => `local('${name}')`);
          font.resources.forEach((resource) => {
            const subset = subsets.find((s) => s.name === resource.subset);
            const src = [...local, `url('${url}${resource.file}') format('${resource.format}')`];
            rules.push(`
    @font-face {
      font-family: '${fontFamily.name}';
      font-style: ${font.style};
      font-weight: ${font.weight};
      font-display: fallback;
      src: ${src.join(',\n')};
      unicode-range: ${subset?.unicodeRange}
    }
            `);
          });
        });
      });
    }

    const tokenMap = {
      color: 'Color',
      opacity: 'Opacity',
      border: 'Border',
      borderRadius: 'BorderRadius',
      fontFamily: 'FontFamily',
      lineHeight: 'LineHeight',
      fontWeight: 'FontWeight',
      fontSize: 'FontSize',
      shadow: 'Shadow',
      spacing: 'Spacing',
      easing: 'Easing',
    };

    Object.keys(this.variables).forEach((section) => {
      if (tokenMap[section] && withComments) {
        rules.push(`
/**
 * @tokens ${toKebabCase(section)}
 * @presenter ${tokenMap[section]}
 */`);
      }
      rules.push(':root {');
      Object.keys(this.variables[section]).forEach((variable) => {
        const value = this.variables[section][variable];
        if (section === 'color' && typeof value === 'object') {
          // color swatches
          Object.keys(value).forEach((valueName) => {
            rules.push(
              `\t${this.formatColorVariableName(
                variable,
                valueName
              )}: ${this.formatColorVariableValue(value[valueName])};`
            );
          });
        } else {
          rules.push(`\t${this.formatVariableName(section, variable)}: ${value};`);
        }
      });
      rules.push('}');
    });
    return rules.join('\n');
  }

  formatColorVariableValue(value) {
    return value;
  }

  formatVariableName(section, variableName): string {
    return `${this._prefix}${toKebabCase(section)}-${toKebabCase(variableName)}`;
  }

  formatColorVariableName(colorName, colorValue?): string {
    const name = this.formatVariableName('color', colorName);
    if (colorValue) {
      return `${name}-${toKebabCase(colorValue)}`;
    } else {
      return name;
    }
  }

  getColorValue(colorName, colorValue?) {
    const colors = this._theme.variables.color;
    if (!colors[colorName]) {
      throw new Error(`Invalid theme color name: ${colorName}.`);
    }

    if (colorValue && !colors[colorName][colorValue]) {
      throw new Error(`Invalid theme color value, ${colorValue}, for color: ${colorName}.`);
    }

    return colors[colorName];
  }

  getColorVariable(colorName, colorValue?): string {
    this.getColorValue(colorName, colorValue);
    return `var(${this.formatColorVariableName(colorName, colorValue)})`;
  }
}
