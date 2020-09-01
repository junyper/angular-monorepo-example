import { Component, NgModule } from '@angular/core';
import { ButtonModule } from 'button';

class HelloComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelloComponent.decorators = [
    { type: Component, args: [{
                selector: 'my-hello',
                template: `
    <my-button>
      hello world
    </my-button>
  `
            },] }
];
HelloComponent.ctorParameters = () => [];

class HelloModule {
}
HelloModule.decorators = [
    { type: NgModule, args: [{
                declarations: [HelloComponent],
                imports: [ButtonModule],
                exports: [HelloComponent]
            },] }
];

/*
 * Public API Surface of hello
 */

/**
 * Generated bundle index. Do not edit.
 */

export { HelloComponent, HelloModule };
//# sourceMappingURL=hello.js.map
