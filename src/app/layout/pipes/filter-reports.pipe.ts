import { Pipe, PipeTransform } from '@angular/core';

import { Report } from '../interface';

// rxjs
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'filterReports'
})
export class FilterReportsPipe implements PipeTransform {
  transform(
    reports: Observable<Report[]>,
    query: string[],
    val: string
  ) {
    return reports.pipe(
      map((r: Report[]) => {
        if (!query || query.length === 0) {
          return r;
        }
        return r.filter(rep => query.includes(rep[val]));
      })
    );
  }
}
