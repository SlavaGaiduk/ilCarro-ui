import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcSliderComponent } from './ic-slider.component';

describe('IcSliderComponent', () => {
	let component: IcSliderComponent;
	let fixture: ComponentFixture<IcSliderComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IcSliderComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IcSliderComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
