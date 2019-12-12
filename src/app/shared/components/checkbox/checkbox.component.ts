import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent implements OnInit {
  @Input() name: string;
  @Input() isChecked: boolean;
  // @ViewChild('input') public inputCheckbox: ElementRef;

  @Output() filter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClick() {
    this.filter.emit('true');
  }
}
