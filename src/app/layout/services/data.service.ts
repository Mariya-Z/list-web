import { Injectable, Injector } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {


  constructor(private injector: Injector) {}

  getLevels() {
    // return this.paramsService.getParam('level');
  }

  getLanguages() {
    // return this.paramsService.getParam('language');
  }
}
