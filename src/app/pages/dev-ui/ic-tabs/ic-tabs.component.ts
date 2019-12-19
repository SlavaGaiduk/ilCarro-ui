import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { faMapMarkedAlt, faSearch, faSlidersH } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-ic-tabs',
	templateUrl: './ic-tabs.component.html',
	styleUrls: ['./ic-tabs.component.scss']
})
export class IcTabsComponent {
	private selected: FormControl;
	private tabs: any[];

	constructor() {
		this.selected = new FormControl(0);
		this.tabs = [
			{ label: 'Search', icon: faSearch, color: 'cl1', transform: 'trans-active', active: 'active1' },
			{ label: 'Filters', icon: faSlidersH, color: 'cl2', transform: 'trans', active: 'active2' },
			{ label: 'Map', icon: faMapMarkedAlt, color: 'cl3', transform: 'trans', active: 'active3' }
		];
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
