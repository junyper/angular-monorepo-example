/*
 * Public API Surface of test-utils
 */

import { screen, fireEvent, waitFor } from '@testing-library/angular';
import { axe } from 'jest-axe';

import { render } from './lib/render';
import { screenshot } from './lib/screenshot';

declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveNoViolations(options?: unknown): R;
    }
  }
}

export {
  render,
  screenshot,
  screen,
  fireEvent,
  axe,
  waitFor
}
