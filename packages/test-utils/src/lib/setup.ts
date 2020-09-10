// import 'jest-preset-angular/build/reflect-metadata';
// import 'zone.js/bundles/zone-testing-bundle.umd';
import 'jest-preset-angular';

import './matchers';
import './polyfills';

// import { getTestBed } from '@angular/core/testing';
// import {
//   BrowserDynamicTestingModule,
//   platformBrowserDynamicTesting
// } from '@angular/platform-browser-dynamic/testing';

// getTestBed()
//   .initTestEnvironment(
//     BrowserDynamicTestingModule,
//     platformBrowserDynamicTesting()
//   );

// give tests more time as taking screenshots takes a while
jest.setTimeout(50000);

// force tests to fail w/ console errors
global.console.warn = (message) => {
  throw message;
};
global.console.error = (message) => {
  throw message;
};
