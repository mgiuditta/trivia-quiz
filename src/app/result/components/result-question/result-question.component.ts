import {Component, Input, OnInit} from '@angular/core';
import {UserAnswer} from "@models/user-answer.model";
import {mergeArrayWithItems} from "@core/utils/common-functions";

@Component({
  selector: 'trivia-result-question',
  templateUrl: './result-question.component.html'
})
export class ResultQuestionComponent implements OnInit {
  answersList: string[] = [];
  @Input() userAnswer!: UserAnswer;

  constructor() {
  }

  ngOnInit(): void {
    this.answersList = this.userAnswer.question.all_answers;
  }


}
