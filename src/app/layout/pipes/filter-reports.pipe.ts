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
    sortBy: string[],
    val: string
  ) {
    console.log('sortBy', sortBy);
    return reports.pipe(
      map((r: Report[]) => {
        if (!sortBy || sortBy.length === 0) {
          return r;
        }
        return r.filter(rep => sortBy.includes(rep[val]));
      })
    );
  }
}
