import { Injectable } from '@angular/core';

import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UrlBuilderService {
  private endPoint: string;

  constructor() {
    this.endPoint = environment.apiUrl;
  }

  getUrl(...args: string[]) {
    const url = args.join('/');
    return `${this.endPoint}/${url}`;
  }
}
