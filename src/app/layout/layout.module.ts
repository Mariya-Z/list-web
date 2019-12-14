import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent, ReportComponent } from './components';
import { ReportViewComponent } from './components/report/report-view/report-view.component';

@NgModule({
  declarations: [HomeComponent, ReportComponent, ReportViewComponent],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  exports: [HomeComponent]
})
export class LayoutModule {}
