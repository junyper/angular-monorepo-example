import { Component } from '@angular/core';
import { configure, render as _render } from '@testing-library/angular';
import { ThemeProviderModule } from '@my/theme';

configure({
  defaultImports: [],
});

@Component({
  selector: 'test-fixture',
  template: ''
})
class TestFixture {}

export const render = (options: any) => {
  const { template, imports, ...rest } = options;
  return _render(TestFixture, {
    imports: [ ThemeProviderModule, ...(imports || []) ],
    template: `<my-theme-provider>${template}</my-theme-provider>`,
    ...rest
  });
}
