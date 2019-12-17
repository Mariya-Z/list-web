import { Component, Output, Input, EventEmitter } from '@angular/core';
import { Language, Level } from 'src/app/layout';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})
export class CheckboxComponent {
  @Input() data: Language[] | Level[];
  @Output() filter: EventEmitter<string[]> = new EventEmitter<string[]>();

  get selectedCheckbox() {
    return this.data.reduce((result, item) => {
      if (item.isChecked) {
        result.push(item.name);
      }
      return result;
    }, []);
  }

  onChange() {
    this.filter.emit(this.selectedCheckbox);
  }
}
