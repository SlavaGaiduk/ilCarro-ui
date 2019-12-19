import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevUiRoutingModule } from './dev-ui-routing.module';
import { DevUiComponent } from './dev-ui.component';
import { IcUiModule } from '../../../../projects/ic-ui/src/lib/ic-ui.module';
import { IcSliderComponent } from './ic-slider/ic-slider.component';
import { IcTabsComponent } from './ic-tabs/ic-tabs.component';

@NgModule({
	declarations: [DevUiComponent, IcSliderComponent, IcTabsComponent],
	imports: [CommonModule, DevUiRoutingModule, IcUiModule],
	entryComponents: [DevUiComponent, IcSliderComponent]
})
export class DevUiModule {}
