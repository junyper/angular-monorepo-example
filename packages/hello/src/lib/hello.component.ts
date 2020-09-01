import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-hello',
  template: `
    <my-button>
      hello world
    </my-button>
  `,
  styles: [
  ]
})
export class HelloComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
