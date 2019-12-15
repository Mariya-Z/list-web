import { Component, OnInit, Input } from '@angular/core';
import { Report } from 'src/app/layout/interface/report.interface';

@Component({
  selector: 'app-report-view',
  templateUrl: './report-view.component.html',
  styleUrls: ['./report-view.component.scss']
})
export class ReportViewComponent {
  @Input() report: Report;
}
