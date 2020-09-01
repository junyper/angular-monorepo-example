import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HelloModule } from 'hello';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
