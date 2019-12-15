import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { LanguageService, LevelService } from '../../services';
import { Language, Level } from '../../interface';

// rxjs
import { Observable } from 'rxjs';
import { debounceTime, tap, distinctUntilChanged } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  sortStr$: Observable<string>;
  language$: Observable<Language[]>;
  level$: Observable<Level[]>;

  arr = [
    {
      lang: 'EN',
      isChecked: true
    },
    {
      lang: 'RU',
      isChecked: false
    }
  ];

  constructor(
    private formBuilder: FormBuilder,
    private languageService: LanguageService,
    private levelService: LevelService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['first']
    });

    this.sortStr$ = this.searchForm.get('search').valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      tap(i => console.log(i))
    );

    this.language$ = this.languageService.getLanguages();
    this.level$ = this.levelService.getLevels();
  }

  onClick() {
    console.log('filter');
  }

  onReset() {
    this.searchForm.setValue({ search: '' });
  }
}
