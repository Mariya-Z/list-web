import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

// rxjs
import { Subscription } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  serchForm: FormGroup;
  private sub: Subscription;

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

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.serchForm = this.formBuilder.group({
      search: ['']
    });

    this.sub = this.serchForm
      .get('search')
      .valueChanges.pipe(
        debounceTime(1000),
        map(value => console.log(value))
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  onClick() {
    console.log('filter');
    // this.a = this.reportsService.getReports(`${this.url}/en_reports`).pipe(
    //   map(i => {
    //     return i;
    //   })
    // );
  }

  onReset() {
    // and remove all checkboxes
    this.arr.forEach(element => {
      element.isChecked = false;
    });
    // this.a = this.reportsService.getReports(`${this.url}/reports`).pipe(
    //   map(i => {
    //     return i;
    //   })
    // );
    console.log('onReset arr=', this.arr);
  }
}
