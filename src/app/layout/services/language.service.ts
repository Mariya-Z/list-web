import { Injectable, Inject } from '@angular/core';

import { Data } from '../interface';
import { DataBridgeService, StorageService } from '../../shared/services';
import { LANGUAGE_STORAGE_TOKEN } from '../providers';

// rxjs
import { iif, of, Observable } from 'rxjs';
import { take, switchMap, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(
    @Inject(LANGUAGE_STORAGE_TOKEN) private storage: StorageService<Data>,
    private dataBridge: DataBridgeService
  ) {}

  getData(): Observable<Array<Data>> {
    return this.storage
      .getData()
      .pipe(
        switchMap(data =>
          iif(() => data === null, this.getDataFromRemote(), of(data))
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
    this.storage
      .getData()
      .pipe(
        take(1),
        map(data =>
          data.map(d => {
            d.isChecked = false;
            return d;
          })
        )
      )
      .subscribe(data => this.storage.setData(data));
  }

  private getDataFromRemote() {
    return this.dataBridge
      .getData<Array<Data>>('language')
      .pipe(tap(data => this.storage.setData(data)));
  }
}
