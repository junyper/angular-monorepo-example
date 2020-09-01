import 'jest-preset-angular';

// import matchers
import '@testing-library/jest-dom';
import 'jest-axe/extend-expect';

import './polyfills';

// give tests more time as taking screenshots takes a while
jest.setTimeout(50000);

// force tests to fail w/ console errors
global.console.warn = (message) => {
  throw message;
};
global.console.error = (message) => {
  throw message;
};
