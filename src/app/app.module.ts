import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { IcUiModule } from '../../projects/ic-ui/src/public-api';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule, MatCheckboxModule, MatIconModule, MatSelectModule, MatSliderModule } from '@angular/material';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SingupComponent } from './pages/singup/singup.component';
import { SearchComponent } from './pages/search/search.component';
import { MainComponent } from './pages/main/main.component';
import { ViewComponent } from './pages/view/view.component';
import { UploadComponent } from './pages/upload/upload.component';
import { FilterComponent } from './pages/filter/filter.component';
import { MapComponent } from './pages/map/map.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
	declarations: [
		AppComponent,
		SingupComponent,
		SearchComponent,
		MainComponent,
		ViewComponent,
		UploadComponent,
		FilterComponent,
		MapComponent,
		LoginComponent
	],
	imports: [
		BrowserModule,
		IcUiModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatButtonModule,
		MatTabsModule,
		MatSelectModule,
		MatButtonToggleModule,
		MatCheckboxModule,
		MatCardModule,
		FormsModule,
		MatSliderModule,
		MatIconModule,
		ReactiveFormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
