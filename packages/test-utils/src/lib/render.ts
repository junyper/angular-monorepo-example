import { Component } from '@angular/core';
import { configure, render as _render } from '@testing-library/angular';
import { ThemeProviderModule, ThemeProvider } from '@my/theme';

configure({
  defaultImports: [],
});

@Component({
  selector: 'test-fixture',
  template: ''
})
class Fixture {}

@Component({
  selector: 'test-wrapper',
  template: `
    <my-theme-provider>
      <ng-content></ng-content>
    </my-theme-provider>
  `
})
class Wrapper {}

export const render =  (...args) => {
  const [ first, second ] = args;

  if (typeof first === 'function') {
    const { imports, ...options } = second;
    return _render(first, {
      imports: [ ThemeProviderModule, ...(imports || []) ],
      wrapper: Wrapper,
      ...options
    });
  } else {
    const { imports, ...options } = first;
    return _render(Fixture, {
      imports: [ ThemeProviderModule, ...(imports || []) ],
      wrapper: Wrapper,
      ...options
    });
  }
}
