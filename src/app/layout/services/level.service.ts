import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlBuilderService } from 'src/app/shared';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LevelService {

  constructor(
    private http: HttpClient,
    private urlBuilder: UrlBuilderService
  ) {}

  public getLevels<T>(): Observable<T> {
    return this.http.get<T>(this.urlBuilder.getUrl('level'));
  }
}
