import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
	selector: 'app-ic-slider',
	templateUrl: './ic-slider.component.html',
	styleUrls: ['./ic-slider.component.scss']
})
export class IcSliderComponent {
	title = 'ic-slider';

	sliderMinValue: number;
	sliderMaxValue: number;
	options: Options;

	constructor() {
		this.sliderMinValue = 100;
		this.sliderMaxValue = 300;
		this.options = {
			floor: 0,
			ceil: 600
		};
	}
}
