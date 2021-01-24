import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {registerLocaleData} from '@angular/common';
import localEs from '@angular/common/locales/es'
import localFr from '@angular/common/locales/fr'

registerLocaleData(localEs)
registerLocaleData(localFr)
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: LOCALE_ID,useValue: 'es'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
