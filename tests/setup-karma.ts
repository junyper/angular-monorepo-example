// This file is required by karma.conf.js and loads recursively all the .spec and framework files
import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

import './jasmine-helpers';

import { render } from './render';

(window as any).render = render;

// // the jest.fn() API
// import jest from 'jest-mock';
// (window as any).jest = jest;

// // Add missing Jest functions
(window as any).test = (window as any).it;
(window as any).test.each = inputs => (testName, test) =>
    inputs.forEach(args => window.it(testName, () => test(...args)));
(window as any).test.todo = function () {
  return undefined;
};

declare const require: {
  context(path: string, deep?: boolean, filter?: RegExp): {
    keys(): string[];
    <T>(id: string): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

// Then we find all the tests.
const context = require.context('../src/', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);
