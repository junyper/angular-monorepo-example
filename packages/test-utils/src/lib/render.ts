import { Component } from '@angular/core';
import { configure, render as _render } from '@testing-library/angular';

configure({
  defaultImports: [],
});

@Component({ selector: 'test-fixture', template: '' })
class Fixture {}

export const render =  (...args) => {
  const [ first, second ] = args;
  if (typeof first === 'function') {
    return _render(first, { excludeComponentDeclaration: true, ...second });
  } else {
    return _render(Fixture, first);
  }
}
