import { Component } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormControl } from '@angular/forms';
import { faMapMarkedAlt, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';

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
	// tabs
	selected = new FormControl(0);
	tabs = [
		{ label: 'Search', icon: faSearch },
		{ label: 'Filters', icon: faSlidersH },
		{ label: 'Map', icon: faMapMarkedAlt }
	];

	constructor() {
		this.sliderMinValue = 100;
		this.sliderMaxValue = 300;
	}

	changeTabOrder($event: number) {
		const tab = this.tabs[$event];
		this.tabs.splice($event, 1);
		this.tabs.splice(0, 0, tab);
	}
}
