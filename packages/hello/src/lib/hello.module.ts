import { NgModule } from '@angular/core';
import { HelloComponent } from './hello.component';

import { ButtonModule } from 'button';

@NgModule({
  declarations: [HelloComponent],
  imports: [ ButtonModule ],
  exports: [HelloComponent]
})
export class HelloModule { }
