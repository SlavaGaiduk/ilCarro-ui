import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IcUiModule } from '../../projects/ic-ui/src/public-api';
import { ReactiveFormsModule } from '@angular/forms';
import { MatListModule } from '@angular/material';
import { DevUiComponent } from './Pages/dev-ui/dev-ui.component';
import { LoginComponent } from './Pages/dev-ui/login/login.component';
import { MottoBlockComponent } from './Pages/dev-ui/motto-block/motto-block.component';
import { DevUiModule } from './Pages/dev-ui/dev-ui.module';
import { MatCardModule } from '@angular/material/card';

@NgModule({
	declarations: [AppComponent, DevUiComponent, LoginComponent, MottoBlockComponent],
	imports: [
		BrowserModule,
		IcUiModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		ReactiveFormsModule,
		MatListModule,
		DevUiModule,
		MatCardModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
