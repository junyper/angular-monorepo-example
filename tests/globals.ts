
import { screen as _screen } from '@testing-library/angular';
import { axe as _axe } from 'jest-axe';

import { render as _render } from './render';
import { snapshot as _snapshot } from './snapshot';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoViolations(options?: unknown): R;
    }
  }
  namespace TestUtils {
    function render(first: unknown, second?: Record<string, unknown>);
    function snapshot(options?: Record<string, unknown>);
    var screen: typeof _screen;
    var axe: typeof _axe;
  }
}

global.TestUtils = {
  render: _render,
  snapshot: _snapshot,
  screen: _screen,
  axe: _axe
};

export {}
