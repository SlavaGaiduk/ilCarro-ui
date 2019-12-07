import {NgModule} from '@angular/core';
import {
  MatButtonModule,
  MatButtonToggleModule,
  MatCheckboxModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonToggleModule,
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonToggleModule,
  ]
})
export class IcUiModule {
}
