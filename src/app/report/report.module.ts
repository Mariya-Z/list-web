import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportComponent } from './components/report/report.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [ReportComponent],
  imports: [CommonModule, SharedModule],
  exports: [ReportComponent]
})
export class ReportModule {}
