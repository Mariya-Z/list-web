import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { DataService } from '../../services';
import { Data } from '../../interface';

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
  selectedLangs: string[];

  constructor(
    private formBuilder: FormBuilder,
    private dataService: DataService
  ) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({
      search: ['']
    });

    this.filterStr$ = this.searchForm.get('search').valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged()
    );

    // this.language$ = this.dataService.getData('language');
    this.level$ = this.dataService.getData();
    this.selectedLevel$ = this.dataService.getSelected();
  }

  onLangClick(languages: string[]) {
    this.selectedLangs = languages;
  }

  onLevelClick(newData) {
    console.log('newData = ', newData);
    this.dataService.updateData(newData.data, newData.index);
  }

  onReset() {
    this.searchForm.setValue({ search: '' });
    this.dataService.reset();
    this.selectedLangs = [];
  }
}
