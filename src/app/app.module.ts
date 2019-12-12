import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IcUiModule } from '../../projects/ic-ui/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
	declarations: [AppComponent],
	imports: [BrowserModule, IcUiModule, AppRoutingModule, BrowserAnimationsModule, ReactiveFormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
