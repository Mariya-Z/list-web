import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Data } from 'src/app/layout';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() data: Data[];
  @Output() filter: EventEmitter<{data, index}> = new EventEmitter<any>();

  get selectedCheckbox() {
    return this.data.reduce((result, item) => {
      if (item.isChecked) {
        result.push(item.name);
      }
      return result;
    }, []);
  }

  onChange(index) {
    this.filter.emit({data: this.data[index], index: index});
  }
}
