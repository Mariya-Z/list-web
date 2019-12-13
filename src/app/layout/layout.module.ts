import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent, ReportComponent } from './components';

@NgModule({
  declarations: [HomeComponent, ReportComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent]
})
export class LayoutModule {}
