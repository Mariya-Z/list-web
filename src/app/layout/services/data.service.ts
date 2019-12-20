import { Injectable, Inject } from '@angular/core';
import { DataBridgeService, StorageService } from '../../shared/services';

import { Data } from '../interface';

// rxjs
import { iif, of, Observable } from 'rxjs';
import { take, switchMap, tap, map } from 'rxjs/operators';
import { LEVEL_STORAGE_TOKEN } from '../layout.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(
    @Inject(LEVEL_STORAGE_TOKEN) private path: string,
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

  updateData(data: Data, key: number) {
    this.storage.updateData(data, key);
  }

  reset() {
    this.storage.getData().pipe(
      take(1),
      map(data => data.map(d => {
        d.isChecked = false;
        return d;
      }))
    ).subscribe(data => this.storage.setData(data));
  }


  private getDataFromRemote() {
    return this.dataBridge
      .getData<Array<Data>>(this.path)
      .pipe(tap(data => this.storage.setData(data)));
  }
}
