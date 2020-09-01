(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
  typeof define === 'function' && define.amd ? define('button', ['exports', '@angular/core'], factory) :
  (global = global || self, factory(global.button = {}, global.ng.core));
}(this, (function (exports, core) { 'use strict';

  var ButtonComponent = /** @class */ (function () {
      function ButtonComponent() {
      }
      return ButtonComponent;
  }());
  ButtonComponent.decorators = [
      { type: core.Component, args: [{
                  selector: 'my-button',
                  template: "\n    <button>\n      <ng-content></ng-content>\n    </button>\n  ",
                  styles: [":host button{all:unset;background-color:#00008b;color:#fff;padding:1rem}"]
              },] }
  ];

  var ButtonModule = /** @class */ (function () {
      function ButtonModule() {
      }
      return ButtonModule;
  }());
  ButtonModule.decorators = [
      { type: core.NgModule, args: [{
                  declarations: [ButtonComponent],
                  imports: [],
                  exports: [ButtonComponent]
              },] }
  ];

  /*
   * Public API Surface of button
   */

  /**
   * Generated bundle index. Do not edit.
   */

  exports.ButtonComponent = ButtonComponent;
  exports.ButtonModule = ButtonModule;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=button.umd.js.map
