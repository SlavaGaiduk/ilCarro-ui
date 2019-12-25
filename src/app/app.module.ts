import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IcUiModule } from '../../projects/ic-ui/src/public-api';
import { LoginComponent } from './pages/login/login.component';
import { MostPopularChoicesComponent } from './pages/login/most-popular-choices/most-popular-choices.component';
import { LatestFeedbacksComponent } from './pages/login/latest-feedbacks/latest-feedbacks.component';

@NgModule({
	declarations: [AppComponent, LoginComponent, MostPopularChoicesComponent, LatestFeedbacksComponent],
	imports: [BrowserModule, IcUiModule, AppRoutingModule, BrowserAnimationsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
