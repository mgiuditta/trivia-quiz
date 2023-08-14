import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Color} from "@shared/types/color.type";

@Component({
  selector: 'trivia-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {

  @Input() color: Color = "danger";

}
