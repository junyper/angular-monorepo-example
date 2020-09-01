import { Component } from '@angular/core';

@Component({
  selector: 'my-button',
  template: `
    <button>
      <ng-content></ng-content>
    </button>
  `,
  styleUrls: ['button.component.css']
})
export class ButtonComponent {
}
