import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { LanguageService, LevelService } from '../../services';
import { Data } from '../../interface';
import { ChangedData } from '../../../shared';

// rxjs
import { Observable } from 'rxjs';
import { debounceTime, tap, distinctUntilChanged, map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  searchForm: FormGroup;
  filterStr$: Observable<string>;
  language$: Observable<Data[]>;
  level$: Observable<Data[]>;
  selectedLevel$;
  selectedLanguage$;

  constructor(
    private formBuilder: FormBuilder,
    private levelService: LevelService,
    private languageService: LanguageService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });

    this.filterStr$ = this.searchForm
      .get('search')
      .valueChanges.pipe(debounceTime(500), distinctUntilChanged());

    this.level$ = this.levelService.getData();
    this.selectedLevel$ = this.levelService.getSelected();
    this.language$ = this.languageService.getData();
    this.selectedLanguage$ = this.languageService.getSelected();
  }

  onLangClick(newData: ChangedData) {
    this.languageService.updateData(newData.data, newData.index);
  }
  onLevelClick(newData: ChangedData) {
    this.levelService.updateData(newData.data, newData.index);
  }

  onReset() {
    this.searchForm.setValue({ search: '' });
    this.levelService.reset();
    this.languageService.reset();
  }
}
