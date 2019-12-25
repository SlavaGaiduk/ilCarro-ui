import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IcUiModule } from '../../projects/ic-ui/src/public-api';
import { ToolsComponent } from './components/tools/tools.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
	declarations: [AppComponent, ToolsComponent, SignUpComponent],
	imports: [BrowserModule, IcUiModule, AppRoutingModule, BrowserAnimationsModule, MatSliderModule, MatCheckboxModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
