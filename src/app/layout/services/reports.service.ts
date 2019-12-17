import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import { UrlBuilderService } from 'src/app/shared';

// rxjs
import { Observable } from 'rxjs';

export interface RequestOptionsInterface {
  headers?: HttpHeaders;
  observe?: 'body';
  params?: HttpParams;
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  body?: any;
}

@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  constructor(
    private http: HttpClient,
    private urlBuilder: UrlBuilderService
  ) {}

  getReports<T>(options?: RequestOptionsInterface): Observable<T> {
    return this.http.get<T>(this.urlBuilder.getUrl('reports'), options);
  }
}
