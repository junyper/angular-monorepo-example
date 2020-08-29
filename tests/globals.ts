
import { render as _render } from './render';
import { snapshot as _snapshot } from './snapshot';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoViolations(options?: unknown): R;
    }
  }
  namespace OtusTestUtils {
    function render(first: unknown, second?: Record<string, unknown>);
    function snapshot(options?: Record<string, unknown>);
  }
}

global.OtusTestUtils = {
  render: _render,
  snapshot: _snapshot
};

export {}
