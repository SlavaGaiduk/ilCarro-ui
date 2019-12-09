import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IcUiModule } from '../../projects/ic-ui/src/public-api';
import {Ng5SliderModule} from "ng5-slider";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        IcUiModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        Ng5SliderModule,
        MatButtonToggleModule,
      FontAwesomeModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
