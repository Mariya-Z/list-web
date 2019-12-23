import { NgModule, InjectionToken } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
import { HomeComponent, ReportComponent } from './components';
import { ReportViewComponent } from './components/report/report-view/report-view.component';
import { FilterReportsPipe } from './pipes/filter-reports.pipe';

import { LanguageProvider, LevelProvider } from './providers';

@NgModule({
  declarations: [
    HomeComponent,
    ReportComponent,
    ReportViewComponent,
    FilterReportsPipe
  ],
  imports: [CommonModule, SharedModule, FormsModule, ReactiveFormsModule],
  providers: [LanguageProvider, LevelProvider],
  exports: [HomeComponent]
})
export class LayoutModule {}
