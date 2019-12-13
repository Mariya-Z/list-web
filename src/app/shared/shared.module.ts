import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CheckboxComponent } from './components';

@NgModule({
  declarations: [CheckboxComponent],
  imports: [CommonModule],
  exports: [CheckboxComponent]
})
export class SharedModule {}
