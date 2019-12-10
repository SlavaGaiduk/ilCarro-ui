import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ilCargo';
	// slider
	sliderMinValue: number = 100;
	sliderMaxValue: number = 300;
	options: Options = {
		floor: 0,
		ceil: 600
	};
}
