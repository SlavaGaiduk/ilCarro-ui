import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ilCarro';
	// slider
	sliderMinValue: number;
	sliderMaxValue: number;
	options: Options = {
		floor: 0,
		ceil: 600
	};

	constructor() {
		this.sliderMinValue = 100;
		this.sliderMaxValue = 300;
	}
}
