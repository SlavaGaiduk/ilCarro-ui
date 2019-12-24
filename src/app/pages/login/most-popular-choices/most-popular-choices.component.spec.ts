import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MostPopularChoicesComponent } from './most-popular-choices.component';

describe('MostPopularChoicesComponent', () => {
	let component: MostPopularChoicesComponent;
	let fixture: ComponentFixture<MostPopularChoicesComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [MostPopularChoicesComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(MostPopularChoicesComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
