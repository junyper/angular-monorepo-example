import 'jest-preset-angular';
import { format } from 'util';

import './matchers';
import './polyfills';

// give tests more time as taking screenshots takes a while
jest.setTimeout(50000);

const error = global.console.error;

global.console.error = function(...args) {
  error(...args);
  throw new Error(format.apply(null, args));
};

const warn = global.console.warn;

global.console.warn = function(...args) {
  warn(...args);
  throw new Error(format.apply(null, args));
};
