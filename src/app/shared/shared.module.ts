import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { CheckboxComponent } from './components';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule, FormsModule, HttpClientModule],
  exports: [CheckboxComponent]
})
export class SharedModule {}
