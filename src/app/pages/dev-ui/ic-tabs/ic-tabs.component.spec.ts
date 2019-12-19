import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IcTabsComponent } from './ic-tabs.component';

describe('IcTabsComponent', () => {
	let component: IcTabsComponent;
	let fixture: ComponentFixture<IcTabsComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [IcTabsComponent]
		}).compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(IcTabsComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
