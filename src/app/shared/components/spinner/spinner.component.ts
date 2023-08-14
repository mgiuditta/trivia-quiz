import {Component, Input} from '@angular/core';
import {Color} from "@shared/types/color.type";
import {Spinner} from "@shared/types/spinner.type";

@Component({
  selector: 'trivia-spinner',
  templateUrl: './spinner.component.html'
})
export class SpinnerComponent {

  @Input() color: Color = "info";
  @Input() spinnerType: Spinner = "spinner-border"

}
