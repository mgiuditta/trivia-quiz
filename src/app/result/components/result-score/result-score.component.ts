import {Component, Input} from '@angular/core';

@Component({
  selector: 'trivia-result-score',
  templateUrl: './result-score.component.html',
})
export class ResultScoreComponent {

  @Input() scoreQuiz: number = 0;

}
