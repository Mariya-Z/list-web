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
import { map } from 'rxjs/operators';
import { combineLatest, BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit, OnChanges {
  @Input() sortStr: string;
  @Input() level: string[];
  @Input() lang: string[];
  reports$: Observable<Report[]>;
  private sortStr$ = new BehaviorSubject(this.sortStr);

  constructor(private reportsService: ReportsService) {}

  ngOnInit() {
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
      })
    );
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.hasOwnProperty('sortStr')) {
      this.sortStr$.next(changes.sortStr.currentValue);
    }
  }
}
