import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NomComponenteComponent } from './nom-componente/nom-componente.component';
import { NomComponente2Component } from './nom-componente2/nom-componente2.component';

@NgModule({
  declarations: [
    AppComponent,
    NomComponenteComponent,
    NomComponente2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
