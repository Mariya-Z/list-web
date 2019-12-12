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
  a;

  private url = 'http://localhost:3000';

  arr = [
    {
      lang: 'EN',
      isChecked: true
    },
    {
      lang: 'RU',
      isChecked: false
    }
  ];

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    // /apps/list/reports
    this.a = this.reportsService.getReports(`${this.url}/reports`).pipe(
      map(i => {
        return i;
      })
    );
  }

  onClick() {
    console.log('filter');
    this.a = this.reportsService.getReports(`${this.url}/en_reports`).pipe(
      map(i => {
        return i;
      })
    );
  }

  onReset() {
    // and remove all checkboxes
    this.arr.forEach(element => {
      element.isChecked = false;
    });
    this.a = this.reportsService.getReports(`${this.url}/reports`).pipe(
      map(i => {
        return i;
      })
    );
    console.log('onReset arr=', this.arr);
  }
}
