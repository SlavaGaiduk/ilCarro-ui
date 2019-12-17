import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import {
	MatButtonModule,
	MatButtonToggleModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatIconModule,
	MatInputModule,
	MatSelectModule,
	MatTabsModule
} from '@angular/material';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Ng5SliderModule } from 'ng5-slider';

@NgModule({
	declarations: [],
	imports: [
		ReactiveFormsModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatSelectModule,
		MatTabsModule,
		FontAwesomeModule,
		Ng5SliderModule
	],
	exports: [
		ReactiveFormsModule,
		MatButtonModule,
		MatButtonToggleModule,
		MatCheckboxModule,
		MatFormFieldModule,
		MatIconModule,
		MatInputModule,
		MatSelectModule,
		MatTabsModule,
		FontAwesomeModule,
		Ng5SliderModule
	]
})
export class IcUiModule {}
