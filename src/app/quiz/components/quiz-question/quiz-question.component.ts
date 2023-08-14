import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Question} from "@models/question/question.model";
import {randomizeArrayOrder} from "@core/utils/common-functions";

@Component({
  selector: 'trivia-quiz-question',
  templateUrl: './quiz-question.component.html',
})
export class QuizQuestionComponent implements OnInit {
  answers: string[] = [];
  answerSelected: string = "";
  selectedAnswerIndex!: number;

  @Input() question: Question = {} as Question;
  @Output() selectAnswer: EventEmitter<void> = new EventEmitter<void>();

  constructor() {
  }

  ngOnInit() {
    this.answers = this.question.all_answers;
    this.randomizeQuestionsOrder();
  }

  isSelectedAnswer(index: number):boolean{
    return this.selectedAnswerIndex === index;
  }

  get selectedAnswer(): string {
    return this.answers[this.selectedAnswerIndex];
  }

  onAnswerClick(index: number): void {
    this.selectedAnswerIndex = index;
    this.answerSelected = this.answers[this.selectedAnswerIndex];
    this.selectAnswer.emit();
  }

  private randomizeQuestionsOrder(): void {
    this.answers = randomizeArrayOrder(this.answers);
    this.question.all_answers = this.answers; // memorize question order
  }


}
