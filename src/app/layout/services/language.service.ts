import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { UrlBuilderService } from 'src/app/shared';

// rxjs
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  constructor(
    private http: HttpClient,
    private urlBuilder: UrlBuilderService
  ) {}

  getLanguages(): Observable<any> {
    return this.http.get(this.urlBuilder.getUrl('language'));
  }
}
