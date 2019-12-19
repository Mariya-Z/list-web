import { Injectable } from '@angular/core';

// rxjs
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StorageService<T> {
  private data$: BehaviorSubject<Array<T> | null> = new BehaviorSubject(null);

  constructor() {}

  getData() {
    return this.data$;
  }

  setData(value: Array<T>) {
    this.data$.next(value);
  }

  updateData(newData: T, key: number) {
    const prev =  this.data$.getValue();
    const next = [
      ...prev.slice(0, key),
      newData,
      ...prev.slice(key + 1)
    ];
    this.data$.next(next);
  }

  resetData(data: Array<T>) {
    this.data$.next(data);
  }
}
