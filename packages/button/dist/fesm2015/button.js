import { Component, NgModule } from '@angular/core';

class ButtonComponent {
}
ButtonComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-button',
                template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
                styles: [":host button{all:unset;background-color:#00008b;color:#fff;padding:1rem}"]
            },] }
];

class ButtonModule {
}
ButtonModule.decorators = [
    { type: NgModule, args: [{
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

export { ButtonComponent, ButtonModule };
//# sourceMappingURL=button.js.map
