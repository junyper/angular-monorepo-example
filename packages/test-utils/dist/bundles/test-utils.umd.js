(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@testing-library/angular'), require('jest-axe'), require('@angular/core'), require('path'), require('fs-extra'), require('http'), require('connect'), require('finalhandler'), require('puppeteer'), require('@percy/puppeteer'), require('dotenv/config'), require('pretty-format')) :
    typeof define === 'function' && define.amd ? define('test-utils', ['exports', '@testing-library/angular', 'jest-axe', '@angular/core', 'path', 'fs-extra', 'http', 'connect', 'finalhandler', 'puppeteer', '@percy/puppeteer', 'dotenv/config', 'pretty-format'], factory) :
    (global = global || self, factory(global['test-utils'] = {}, global.angular, global.jestAxe, global.ng.core, global.path, global.fsExtra, global.http, global.connect, global.finalhandler, global.puppeteer, global.puppeteer$1, null, global.prettyFormat));
}(this, (function (exports, angular, jestAxe, core, path, fsExtra, http, connect, finalhandler, puppeteer, puppeteer$1, config, prettyFormat) { 'use strict';

    http = http && Object.prototype.hasOwnProperty.call(http, 'default') ? http['default'] : http;
    connect = connect && Object.prototype.hasOwnProperty.call(connect, 'default') ? connect['default'] : connect;
    finalhandler = finalhandler && Object.prototype.hasOwnProperty.call(finalhandler, 'default') ? finalhandler['default'] : finalhandler;
    puppeteer = puppeteer && Object.prototype.hasOwnProperty.call(puppeteer, 'default') ? puppeteer['default'] : puppeteer;
    prettyFormat = prettyFormat && Object.prototype.hasOwnProperty.call(prettyFormat, 'default') ? prettyFormat['default'] : prettyFormat;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        Object.defineProperty(o, k2, { enumerable: true, get: function () { return m[k]; } });
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    ;
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }
    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    angular.configure({
        defaultImports: [],
    });
    var Fixture = /** @class */ (function () {
        function Fixture() {
        }
        return Fixture;
    }());
    Fixture.decorators = [
        { type: core.Component, args: [{ selector: 'test-fixture', template: '' },] }
    ];
    var render = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(args, 2), first = _a[0], second = _a[1];
        if (typeof first === 'function') {
            return angular.render(first, Object.assign({ excludeComponentDeclaration: true }, second));
        }
        else {
            return angular.render(Fixture, first);
        }
    };

    var _a = prettyFormat.plugins, DOMElement = _a.DOMElement, DOMCollection = _a.DOMCollection;
    var prettyDOM = function (htmlElement, maxLength, options) {
        if (htmlElement.documentElement) {
            // eslint-disable-next-line no-param-reassign
            htmlElement = htmlElement.documentElement;
        }
        var debugContent = prettyFormat(htmlElement, Object.assign({
            plugins: [DOMElement, DOMCollection],
            printFunctionName: false,
            highlight: true
        }, options));
        return maxLength !== undefined && htmlElement.outerHTML.length > maxLength
            ? debugContent.slice(0, maxLength) + "..."
            : debugContent;
    };
    var ɵ0 = prettyDOM;
    // eslint-disable-next-line no-console
    var debug = function (el, maxLength, options) {
        if (el === void 0) { el = document; }
        return console.log(prettyDOM(el, maxLength, options));
    };
    var ɵ1 = debug;

    var createServer = function (html) { return __awaiter(void 0, void 0, void 0, function () {
        var app, server;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    app = connect();
                    app.use(function (request, response, next) { return request.url === '/' ? response.end(html) : next(); });
                    app.use(finalhandler);
                    server = http.createServer(app);
                    return [4 /*yield*/, new Promise(function (resolve, reject) {
                            var startServer = function () {
                                server.once('error', function (e) {
                                    if (e.code === 'EADDRINUSE')
                                        server.close(startServer);
                                });
                                server.listen(0, resolve);
                                server.on('error', reject);
                            };
                            startServer();
                        })];
                case 1:
                    _a.sent();
                    return [2 /*return*/, server];
            }
        });
    }); };
    var ɵ0$1 = createServer;
    var generateImage = function (url, fileName, options) { return __awaiter(void 0, void 0, void 0, function () {
        var browser, page, image;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, puppeteer.launch({
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
                    })];
                case 1:
                    browser = _a.sent();
                    return [4 /*yield*/, browser.newPage()];
                case 2:
                    page = _a.sent();
                    return [4 /*yield*/, page.goto(url, { waitUntil: 'networkidle0' })];
                case 3:
                    _a.sent();
                    if (!process.env.CI) return [3 /*break*/, 5];
                    return [4 /*yield*/, puppeteer$1.percySnapshot(page, fileName, options)];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 7];
                case 5: return [4 /*yield*/, page.screenshot(options)];
                case 6:
                    image = _a.sent();
                    fsExtra.outputFileSync(path.join(process.cwd(), "__screenshots__/" + fileName + ".png"), image);
                    _a.label = 7;
                case 7:
                    browser.close();
                    return [2 /*return*/];
            }
        });
    }); };
    var ɵ1$1 = generateImage;
    var SCREENSHOTS = {};
    var getImageFileName = function () {
        var state = expect.getState();
        var testName = state.currentTestName;
        if (SCREENSHOTS[testName]) {
            SCREENSHOTS[testName]++;
        }
        else {
            SCREENSHOTS[testName] = 0;
        }
        var index = SCREENSHOTS[testName];
        return "" + state.currentTestName + (index > 0 ? index : '');
    };
    var ɵ2 = getImageFileName;
    var screenshot = function (options) {
        if (options === void 0) { options = { debug: true }; }
        return __awaiter(void 0, void 0, void 0, function () {
            var fileName, html, server, port, url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (options.debug)
                            debug(document);
                        fileName = getImageFileName();
                        html = document.documentElement.outerHTML;
                        return [4 /*yield*/, createServer(html)];
                    case 1:
                        server = _a.sent();
                        port = server.address().port;
                        url = "http://localhost:" + port;
                        return [4 /*yield*/, generateImage(url, fileName, options)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, new Promise(function (resolve) { return server.close(resolve); })];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    var ɵ3 = screenshot;

    /*
     * Public API Surface of test-utils
     */

    /**
     * Generated bundle index. Do not edit.
     */

    Object.defineProperty(exports, 'fireEvent', {
        enumerable: true,
        get: function () {
            return angular.fireEvent;
        }
    });
    Object.defineProperty(exports, 'screen', {
        enumerable: true,
        get: function () {
            return angular.screen;
        }
    });
    Object.defineProperty(exports, 'waitFor', {
        enumerable: true,
        get: function () {
            return angular.waitFor;
        }
    });
    Object.defineProperty(exports, 'axe', {
        enumerable: true,
        get: function () {
            return jestAxe.axe;
        }
    });
    exports.render = render;
    exports.screenshot = screenshot;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=test-utils.umd.js.map
