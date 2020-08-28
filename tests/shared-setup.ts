import { Component } from '@angular/core';
import { configure, render as baseRender} from '@testing-library/angular';

@Component({ selector: 'test-fixture', template: '' })
class Fixture {}

const _render =  (...args) => {
  const [ first, second ] = args;
  if (typeof first === 'function') {
    return baseRender(first, { ...second, excludeComponentDeclaration: true });
  } else {
    return baseRender(Fixture, first);
  }
}

declare global {
  var render: typeof _render;
}

global.render = _render;

configure({
  defaultImports: [],
});

global.console.warn = (message) => {
  throw message;
};

global.console.error = (message) => {
  throw message;
};
