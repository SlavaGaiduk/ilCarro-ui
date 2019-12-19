import { Component } from '@angular/core';
import { Options } from 'ng5-slider';
import { FormControl } from '@angular/forms';
import { faMapMarkedAlt, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-dev-ui',
	templateUrl: './dev-ui.component.html',
	styleUrls: ['./dev-ui.component.scss']
})
export class DevUiComponent {
	title = 'dev-ui';

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
		{ label: 'Search', icon: faSearch, color: 'cl1', transform: 'trans-active', active: 'active1' },
		{ label: 'Filters', icon: faSlidersH, color: 'cl2', transform: 'trans', active: 'active2' },
		{ label: 'Map', icon: faMapMarkedAlt, color: 'cl3', transform: 'trans', active: 'active3' }
	];

	constructor() {
		this.sliderMinValue = 100;
		this.sliderMaxValue = 300;
	}

	changeTabOrder($event: number) {
		const tab = this.tabs[$event];
		tab.transform = 'trans-active';
		this.tabs[0].transform = 'trans';
		this.tabs.splice($event, 1);
		this.tabs.splice(0, 0, tab);

		document.getElementById('mat-tab-label-0-0').classList.remove('active1');
		document.getElementById('mat-tab-label-0-0').classList.remove('active2');
		document.getElementById('mat-tab-label-0-0').classList.remove('active3');
		document.getElementById('mat-tab-label-0-' + $event).classList.add(this.tabs[0].active);
	}
}
