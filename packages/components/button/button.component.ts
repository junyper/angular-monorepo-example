import { Component } from '@angular/core';

@Component({
  selector: '[my-button]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['button.component.css']
})
export class ButtonComponent {
}
