import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent, ReportComponent } from './components';
import { ReportViewComponent } from './components/report/report-view/report-view.component';
import { FilterReportsPipe } from './pipes/filter-reports.pipe';

export const LANGUAGE_STORAGE_TOKEN = new InjectionToken(
  'LANGUAGE_STORAGE_TOKEN'
);
export const LEVEL_STORAGE_TOKEN = new InjectionToken('LEVEL_STORAGE_TOKEN');

@NgModule({
  declarations: [
    HomeComponent,
    ReportComponent,
    ReportViewComponent,
    FilterReportsPipe
  ],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  providers: [
    {
      provide: LEVEL_STORAGE_TOKEN,
      useValue: 'level'
    },
    {
      provide: LANGUAGE_STORAGE_TOKEN,
      useValue: 'language'
    }
  ],
  exports: [HomeComponent]
})
export class LayoutModule {}
