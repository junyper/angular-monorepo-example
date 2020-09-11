import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ThemeProviderModule } from '@my/theme';
import { HelloWorldModule } from '@my/components/hello-world';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HelloWorldModule,
    ThemeProviderModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [AppComponent]
})
export class AppModule { }
