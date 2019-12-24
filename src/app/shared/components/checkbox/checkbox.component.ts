import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Data } from 'src/app/layout';

export class ChangedData {
  data: Data;
  index: number;
}

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() data: Data[];
  @Output() filter: EventEmitter<ChangedData> = new EventEmitter<ChangedData>();

  onChange(index: number): void {
    this.filter.emit({data: this.data[index], index});
  }
}
