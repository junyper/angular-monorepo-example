import { configure, render as render$1 } from '@testing-library/angular';
export { fireEvent, screen, waitFor } from '@testing-library/angular';
export { axe } from 'jest-axe';
import { Component } from '@angular/core';
import { __awaiter } from 'tslib';
import { join } from 'path';
import { outputFileSync } from 'fs-extra';
import http from 'http';
import connect from 'connect';
import finalhandler from 'finalhandler';
import puppeteer from 'puppeteer';
import { percySnapshot } from '@percy/puppeteer';
import 'dotenv/config';
import prettyFormat from 'pretty-format';

configure({
    defaultImports: [],
});
class Fixture {
}
Fixture.decorators = [
    { type: Component, args: [{ selector: 'test-fixture', template: '' },] }
];
const render = (...args) => {
    const [first, second] = args;
    if (typeof first === 'function') {
        return render$1(first, Object.assign({ excludeComponentDeclaration: true }, second));
    }
    else {
        return render$1(Fixture, first);
    }
};

const { DOMElement, DOMCollection } = prettyFormat.plugins;
const prettyDOM = (htmlElement, maxLength, options) => {
    if (htmlElement.documentElement) {
        // eslint-disable-next-line no-param-reassign
        htmlElement = htmlElement.documentElement;
    }
    const debugContent = prettyFormat(htmlElement, Object.assign({
        plugins: [DOMElement, DOMCollection],
        printFunctionName: false,
        highlight: true
    }, options));
    return maxLength !== undefined && htmlElement.outerHTML.length > maxLength
        ? `${debugContent.slice(0, maxLength)}...`
        : debugContent;
};
const ɵ0 = prettyDOM;
// eslint-disable-next-line no-console
const debug = (el = document, maxLength, options) => console.log(prettyDOM(el, maxLength, options));
const ɵ1 = debug;

const createServer = (html) => __awaiter(void 0, void 0, void 0, function* () {
    const app = connect();
    app.use((request, response, next) => request.url === '/' ? response.end(html) : next());
    app.use(finalhandler);
    const server = http.createServer(app);
    yield new Promise((resolve, reject) => {
        const startServer = () => {
            server.once('error', (e) => {
                if (e.code === 'EADDRINUSE')
                    server.close(startServer);
            });
            server.listen(0, resolve);
            server.on('error', reject);
        };
        startServer();
    });
    return server;
});
const ɵ0$1 = createServer;
const generateImage = (url, fileName, options) => __awaiter(void 0, void 0, void 0, function* () {
    // Options see:
    // https://github.com/GoogleChrome/puppeteer/blob/master/docs/api.md#puppeteerlaunchoptions
    const browser = yield puppeteer.launch({
        executablePath: process.env.PUPPETEER_EXECUTABLE_PATH || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
        // devtools: true,
        // dumpio: true,
        args: [
            '--no-sandbox',
            '--disable-lcd-text',
            '--disable-setuid-sandbox',
            '--disable-background-timer-throttling',
            '--disable-backgrounding-occluded-windows',
            '--disable-renderer-backgrounding',
            '--disable-infobars',
            '--disable-web-security',
            '--no-default-browser-check',
            '--use-mock-keychain',
            '--no-first-run',
            '--disable-default-apps',
            '--disable-popup-blocking',
            '--disable-translate',
            '--disable-extensions',
            '--use-fake-ui-for-media-stream',
            '--use-fake-device-for-media-stream',
            '--allow-file-access-from-files',
        ],
    });
    const page = yield browser.newPage();
    yield page.goto(url, { waitUntil: 'networkidle0' });
    if (process.env.CI) {
        yield percySnapshot(page, fileName, options);
    }
    else {
        const image = yield page.screenshot(options);
        outputFileSync(join(process.cwd(), `__screenshots__/${fileName}.png`), image);
    }
    browser.close();
});
const ɵ1$1 = generateImage;
const SCREENSHOTS = {};
const getImageFileName = () => {
    const state = expect.getState();
    const testName = state.currentTestName;
    if (SCREENSHOTS[testName]) {
        SCREENSHOTS[testName]++;
    }
    else {
        SCREENSHOTS[testName] = 0;
    }
    const index = SCREENSHOTS[testName];
    return `${state.currentTestName}${index > 0 ? index : ''}`;
};
const ɵ2 = getImageFileName;
const screenshot = (options = { debug: true }) => __awaiter(void 0, void 0, void 0, function* () {
    if (options.debug)
        debug(document);
    const fileName = getImageFileName();
    const html = document.documentElement.outerHTML;
    const server = yield createServer(html);
    const { port } = server.address();
    const url = `http://localhost:${port}`;
    yield generateImage(url, fileName, options);
    yield new Promise(resolve => server.close(resolve));
});
const ɵ3 = screenshot;

/*
 * Public API Surface of test-utils
 */

/**
 * Generated bundle index. Do not edit.
 */

export { render, screenshot };
//# sourceMappingURL=test-utils.js.map
