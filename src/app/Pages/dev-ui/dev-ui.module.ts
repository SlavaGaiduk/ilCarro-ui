import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ChoicesComponent } from './choices/choices.component';

@NgModule({
	declarations: [ChoicesComponent],
	exports: [ChoicesComponent],
	imports: [CommonModule, FormsModule, MatFormFieldModule]
})
export class DevUiModule {}
