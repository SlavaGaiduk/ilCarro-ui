import { NgModule } from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
import {
	MatButtonModule,
	MatButtonToggleModule,
	MatCheckboxModule,
	MatFormFieldModule,
	MatInputModule,
	MatSelectModule,
	MatTabsModule
} from '@angular/material';

@NgModule({
	declarations: [],
	imports: [
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		MatSelectModule,
		MatButtonToggleModule,
		Ng5SliderModule,
		MatTabsModule
	],
	exports: [
		MatFormFieldModule,
		MatInputModule,
		MatButtonModule,
		MatCheckboxModule,
		MatSelectModule,
		MatButtonToggleModule,
		Ng5SliderModule,
		MatTabsModule
	]
})
export class IcUiModule {}
