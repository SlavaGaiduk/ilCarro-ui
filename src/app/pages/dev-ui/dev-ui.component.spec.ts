import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevUiComponent } from './dev-ui.component';

describe('DevUiComponent', () => {
	let component: DevUiComponent;
	let fixture: ComponentFixture<DevUiComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [DevUiComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(DevUiComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
