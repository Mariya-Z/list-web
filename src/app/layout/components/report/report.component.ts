import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges
} from '@angular/core';

import { ReportsService } from '../../services';
import { Report } from '../../interface';

// rxjs
import { map, tap } from 'rxjs/operators';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnChanges {
  @Input() sortStr: string;
  reports$: Observable<Report[]>;
  private sortStr$ = new BehaviorSubject(this.sortStr);

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
    console.log('sortStr=', this.sortStr);
    this.reports$ = combineLatest(
      this.sortStr$,
      this.reportsService.getReports<any[]>()
    ).pipe(
      map(([search, reports]) => {
        return search
          ? reports.filter(r => {
              if (r.title.includes(search)) {
                return r;
              }
            })
          : reports;
      }),
      tap(i => console.log(i))
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('sortStr')) {
      this.sortStr$.next(changes.sortStr.currentValue);
    }
  }
}
