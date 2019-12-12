import { Component, OnInit } from '@angular/core';

import { ReportsService } from '../../services/reports.service';

// rxjs
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {
  reports$;

  private url = 'http://localhost:3000';

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    // /apps/list/reports
    this.reports$ = this.reportsService.getReports(`${this.url}/reports`).pipe(
      map(i => {
        return i;
      })
    );
  }
}
