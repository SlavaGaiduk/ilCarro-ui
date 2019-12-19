import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DevUiComponent } from './dev-ui.component';

const routes: Routes = [{ path: '', component: DevUiComponent }];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class DevUiRoutingModule {}
