import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {
  private data$ = new BehaviorSubject([]);

  constructor() { }

  getData() {
    return this.data$;
  }

  setData(value: any[]) {
    this.data$.next(value);
  }

  updateData(element: any) {
    
  }
}
