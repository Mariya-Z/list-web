import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
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

  constructor() {}

  ngOnInit() {}

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
