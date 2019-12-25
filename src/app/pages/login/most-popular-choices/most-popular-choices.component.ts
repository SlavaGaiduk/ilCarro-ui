import { Component } from '@angular/core';

@Component({
	selector: 'app-most-popular-choices',
	templateUrl: './most-popular-choices.component.html',
	styleUrls: ['./most-popular-choices.component.scss']
})
export class MostPopularChoicesComponent {
	private cars: any[];

	constructor() {
		this.cars = [
			{ name: 'reddevil', symbol: '$', sum: '230', period: 'perday', imgUrl: '/assets/images/zaz.png' },
			{ name: 'blackstar', symbol: '$', sum: '300', period: 'perday', imgUrl: '/assets/images/gaz.png' },
			{ name: 'pneumodaddy', symbol: '$', sum: '180', period: 'perday', imgUrl: '/assets/images/azlk.png' }
		];
	}

	getParallaxImage(imgUrl: string) {
		return 'url(' + imgUrl + ')';
	}
}
