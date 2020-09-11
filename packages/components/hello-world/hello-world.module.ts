import { NgModule } from '@angular/core';

import { ButtonModule } from '@my/components/button';

import { HelloWorldComponent } from './hello-world.component';

@NgModule({
  declarations: [ HelloWorldComponent ],
  imports: [ ButtonModule ],
  exports: [ HelloWorldComponent ]
})
export class HelloWorldModule { }
