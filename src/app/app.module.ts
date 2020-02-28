import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule],
  declarations: [ AppComponent, LoaderComponent ],
  bootstrap:    [ AppComponent ],
  entryComponents: [LoaderComponent]
})

export class AppModule { }
