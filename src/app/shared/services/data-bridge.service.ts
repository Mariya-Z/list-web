import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlBuilderService } from './url-builder.service';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataBridgeService {
  constructor(
    private http: HttpClient,
    private urlBuilder: UrlBuilderService
  ) {}

  public getData<T>(...args: string[]): Observable<T> {
    const url = args.join('/');
    return this.http.get<T>(this.urlBuilder.getUrl(url));
  }
}
