// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/dist/zone-testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';
import '@testing-library/jasmine-dom';

// the jest.fn() API
import jest from 'jest-mock';
// The matchers API
import expect from 'expect';

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

// Add missing Jest functions
(window as any).test = (window as any).it;
(window as any).test.each = inputs => (testName, test) =>
    inputs.forEach(args => window.it(testName, () => test(...args)));
(window as any).test.todo = function () {
  return undefined;
};
(window as any).jest = jest;
(window as any).expect = expect;

// Then we find all the tests.
const context = require.context('../', true, /\.spec\.ts$/);
// And load the modules.
context.keys().map(context);

// import puppeteer from 'puppeteer-web';

// async function run(){

//   const browser = await puppeteer.connect({
//     browserWSEndpoint: `ws://0.0.0.0:8080`, // <-- connect to a server running somewhere
//     ignoreHTTPSErrors: true
//   });

//   const pagesCount = (await browser.pages()).length;
//   const browserWSEndpoint = await browser.wsEndpoint();
//   console.log({ browserWSEndpoint, pagesCount });

// }
