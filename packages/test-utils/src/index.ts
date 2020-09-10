/*
 * Public API Surface of test-utils
 */
import { axe } from 'jest-axe';

import { screenshot } from './lib/screenshot';
import { render } from './lib/render';

import { waitFor, fireEvent, screen } from '@testing-library/angular';

export {
  screenshot,
  axe,
  waitFor,
  fireEvent,
  render,
  screen
}
