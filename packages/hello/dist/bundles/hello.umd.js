(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('button')) :
  typeof define === 'function' && define.amd ? define('hello', ['exports', '@angular/core', 'button'], factory) :
  (global = global || self, factory(global.hello = {}, global.ng.core, global.button));
}(this, (function (exports, core, button) { 'use strict';

  var HelloComponent = /** @class */ (function () {
      function HelloComponent() {
      }
      HelloComponent.prototype.ngOnInit = function () {
      };
      return HelloComponent;
  }());
  HelloComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'my-hello',
                  template: "\n    <my-button>\n      hello world\n    </my-button>\n  "
              },] }
  ];
  HelloComponent.ctorParameters = function () { return []; };

  var HelloModule = /** @class */ (function () {
      function HelloModule() {
      }
      return HelloModule;
  }());
  HelloModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [HelloComponent],
                  imports: [button.ButtonModule],
                  exports: [HelloComponent]
              },] }
  ];

  /*
   * Public API Surface of hello
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.HelloComponent = HelloComponent;
  exports.HelloModule = HelloModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=hello.umd.js.map
