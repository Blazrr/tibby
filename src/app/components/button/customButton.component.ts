import {Component,Input} from '@angular/core';

@Component({
  selector: 'customButton',
  templateUrl: './customButton.component.html',
})
export class customButton {
  @Input () src ="test"
}