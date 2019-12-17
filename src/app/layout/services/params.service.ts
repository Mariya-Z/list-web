import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlBuilderService } from 'src/app/shared';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParamsService {

  constructor(
    private http: HttpClient,
    private urlBuilder: UrlBuilderService
  ) { }

  public getParam<T>(p: string): Observable<T> {
    return this.http.get<T>(this.urlBuilder.getUrl(p));
  }
}
