import { Injectable } from '@angular/core';

import { StorageInterface } from '../interfaces/storage-service.interface';

// rxjs
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class StorageService<T> implements StorageInterface<Array<T>, T> {
  private data$: BehaviorSubject<Array<T> | null> = new BehaviorSubject(null);

  getData(): Observable<Array<T>> {
    return this.data$.asObservable();
  }

  setData(value: Array<T>): void {
    this.data$.next(value);
  }

  updateData(newData: T, key: number): void {
    const prev =  this.data$.getValue();
    const next = [
      ...prev.slice(0, key),
      newData,
      ...prev.slice(key + 1)
    ];
    this.data$.next(next);
  }

  resetData(data: Array<T>): void {
    this.data$.next(data);
  }
}
