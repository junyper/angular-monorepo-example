import 'jest-preset-angular';

import './matchers';
import './polyfills';

// give tests more time as taking screenshots takes a while
jest.setTimeout(50000);

// force tests to fail w/ console errors
global.console.warn = (message: any) => {
  throw message;
};
global.console.error = (message: any) => {
  throw message;
};
