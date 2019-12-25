import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-latest-feedbacks',
	templateUrl: './latest-feedbacks.component.html',
	styleUrls: ['./latest-feedbacks.component.scss']
})
export class LatestFeedbacksComponent implements OnInit {
	private comments: any[];
	constructor() {
		this.comments = [
			{
				src: '/assets/images/ava0.jpg',
				personalData: 'Candy Miles',
				date: '22 September 2019',
				comment: 'Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee cotton candy cake chocolate cake. Bon'
			},
			{
				src: '/assets/images/ava1.jpg',
				personalData: 'Candy Miles',
				date: '22 September 2019',
				comment: 'Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee cotton candy cake chocolate cake. Bon'
			},
			{
				src: '/assets/images/ava2.jpg',
				personalData: 'Candy Miles',
				date: '22 September 2019',
				comment: 'Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee cotton candy cake chocolate cake. Bon'
			},
			{
				src: '/assets/images/ava3.jpg',
				personalData: 'Candy Miles',
				date: '22 September 2019',
				comment: 'Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee cotton candy cake chocolate cake. Bon'
			},
			{
				src: '/assets/images/ava4.jpg',
				personalData: 'Candy Miles',
				date: '22 September 2019',
				comment: 'Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee cotton candy cake chocolate cake. Bon'
			},
			{
				src: '/assets/images/ava5.jpg',
				personalData: 'Candy Miles',
				date: '22 September 2019',
				comment: 'Candy canes topping dessert jelly beans pie jelly beans sweet roll. Toffee cotton candy cake chocolate cake. Bon'
			}
		];
	}

	ngOnInit() {}
}
