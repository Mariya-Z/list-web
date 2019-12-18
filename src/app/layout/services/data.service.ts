import { Injectable } from '@angular/core';
import { DataBridgeService, StorageService } from '../../shared/services';

import { Data } from '../interface';

// rxjs
import { take, switchMap, tap, map, filter } from 'rxjs/operators';
import { iif, of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    private dataBridge: DataBridgeService,
    private storage: StorageService<Data>
  ) {}


  getData(): Observable<Array<Data>> {
    return this.storage
      .getData()
      .pipe(
        switchMap(data =>
          iif(
            () => data === null,
            this.getDataFromRemote(),
            of(data)
          )
        )
      );
  }

  getSelected(): Observable<Array<string>> {
    return this.getData().pipe(
      map(data => {
        return data.reduce((result, d) => {
          if (d.isChecked) {
            result.push(d.name);
          }
          return result;
        }, []);
      })
    );
  }

  // updateData(data: Data, key: number) {
  //   this.storage.updateData(data, key);
  // }

  // reset() {
  //   return this.storage.getData();
  // }

  private getDataFromRemote() {
    return this.dataBridge
      .getData<Array<Data>>('level')
      .pipe(tap(data => this.storage.setData(data)));
  }
}
