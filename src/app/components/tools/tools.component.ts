import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-tools',
	templateUrl: './tools.component.html',
	styleUrls: ['./tools.component.scss']
})
export class ToolsComponent implements OnInit {
	names: {
		buttonName: string;
	};
	constructor() {}

	ngOnInit() {
		this.names = {
			buttonName: 'ButtonName'
		};
	}
}
