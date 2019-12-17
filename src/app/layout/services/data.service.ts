import { Injectable, Injector } from '@angular/core';
import { ParamsService } from './params.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private _paramsService: ParamsService;

  public get paramsService(): ParamsService {
    if (!this._paramsService) {
      this._paramsService = this.injector.get(ParamsService);
    }
    return this._paramsService;
  }

  constructor(private injector: Injector) {}

  getLevels() {
    console.log('getLevels');
    return this.paramsService.getParam('level');
  }

  getLanguages() {
    return this.paramsService.getParam('language');
  }
}
