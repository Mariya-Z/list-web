import { Component, OnInit, Input, OnChanges, OnDestroy } from '@angular/core';

import { ReportsService } from '../../services/reports.service';

// rxjs
import { map, filter, tap } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnChanges {
  @Input() sortStr: string;
  @Input() reset;  // boolean
  sortStr$ = of(this.sortStr);
  reports$;

  private url = 'http://localhost:3000';

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    // /apps/list/reports
    this.reports$ = this.reportsService.getReports(`${this.url}/reports`).pipe(
      map((reports: any[]) => {
        // console.log(reports);
        return reports.filter(r => {
          if (r.title.includes(this.sortStr)) {
            return r;
          }
        });
      })
      // tap(i => console.log(i))
    );
    // .subscribe(
    //   i => console.log(i)
    // );
  }

  ngOnChanges() {
    if (this.sortStr && this.reports$) {
      console.log('ngOnChanges sortStr=', this.sortStr);
      this.sortStr$.subscribe(i => {
        console.log('subscribe');
        this.reports$.pipe(
          map((reports: any[]) => {
            console.log('map');
            console.log(reports);
            return reports.filter(r => {
              if (r.title.includes(this.sortStr)) {
                return r;
              }
            });
          }),
          tap(i => console.log(i))
        );
      });
    }

    //   this.reports$ = this.reportsService.getReports(`${this.url}/reports`).pipe(
    //     map((reports: any[]) => {
    //       console.log(reports);
    //       return reports.filter(r => {
    //         if (r.title.includes(this.sortStr)) {
    //           return r;
    //         }
    //       });
    //     }),
    //     tap(i => console.log(i))
    //   );
    // }
  }
}
