import { Component } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormControl } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'ilCargo';
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

	// tabs
	tabs = ['Search', 'Filters', 'Map'];
	selected = new FormControl(0);

	changeTabOrder(tabNumber: number) {
		switch (this.tabs[tabNumber]) {
			case 'Search':
				this.tabs = ['Search', 'Filters', 'Map'];
				break;
			case 'Filters':
				this.tabs = ['Filters', 'Map', 'Search'];
				break;
			case 'Map':
				this.tabs = ['Map', 'Search', 'Filters'];
				break;
		}
	}
}
