import {NgModule} from '@angular/core';
import { Ng5SliderModule } from 'ng5-slider';
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
    Ng5SliderModule
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonToggleModule,
    Ng5SliderModule
  ]
})
export class IcUiModule {
}
