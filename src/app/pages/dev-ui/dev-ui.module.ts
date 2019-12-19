import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DevUiRoutingModule } from './dev-ui-routing.module';
import { DevUiComponent } from './dev-ui.component';
import { IcUiModule } from '../../../../projects/ic-ui/src/lib/ic-ui.module';

@NgModule({
	declarations: [DevUiComponent],
	imports: [CommonModule, DevUiRoutingModule, IcUiModule],
	entryComponents: [DevUiComponent]
})
export class DevUiModule {}
