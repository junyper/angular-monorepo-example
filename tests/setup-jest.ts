import 'jest-preset-angular';
import '@testing-library/jest-dom';

import './polyfills';
import './globals';

// give tests more time as taking screenshots takes a while
jest.setTimeout(50000);

// force tests to fail w/ console errors
global.console.warn = (message) => {
  throw message;
};
global.console.error = (message) => {
  throw message;
};
