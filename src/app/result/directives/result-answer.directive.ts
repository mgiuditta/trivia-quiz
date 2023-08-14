import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {UserAnswer} from "@models/user-answer.model";
import {Question} from "@models/question/question.model";
import {ButtonColor} from "@shared/types/button-color.type";

@Directive({
  selector: '[triviaResultAnswer]'
})
export class ResultAnswerDirective implements OnInit {

  @Input() triviaResultAnswer!: UserAnswer;
  @Input() currentAnswer: string = "";

  private colorStyle: ButtonColor = "outline-dark";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {
  }

  ngOnInit(): void {
    if (this.triviaResultAnswer) {
      this.updateColorStyle();
      this.renderColorStyle();
    }
  }

  private isCorrectAnswer(): boolean {
    return this.triviaResultAnswer.question.correct_answer === this.currentAnswer;
  }

  // if the current question is wrong and user selected this one
  private isIncorrectAnswer(): boolean {
    const question: Question = this.triviaResultAnswer.question;
    return question.incorrect_answers.includes(this.currentAnswer) && this.triviaResultAnswer.value === this.currentAnswer;
  }

  private renderColorStyle(): void {
    this.renderer.addClass(this.elementRef.nativeElement, `btn-${this.colorStyle}`)
  }

  private setDangerColorStyle(): void {
    this.colorStyle = "danger";
  }

  private setSuccessColorStyle(): void {
    this.colorStyle = "success";
  }

  private updateColorStyle(): void {
    if (this.isCorrectAnswer()) {
      this.setSuccessColorStyle();
    } else if (this.isIncorrectAnswer()) {
      this.setDangerColorStyle();
    }
  }
}
