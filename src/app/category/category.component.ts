import {Component, OnInit} from '@angular/core';
import {QuizService} from "@core/services/quiz.service";
import {QuizInput} from "@models/quiz/quiz-input.model";
import {ResultService} from "@core/services/result.service";

@Component({
  selector: 'trivia-category',
  templateUrl: './category.component.html'
})
export class CategoryComponent implements OnInit {

  constructor(private quizService: QuizService, private resultService: ResultService) {
  }

  ngOnInit(): void {
    this.checkIfAQuizIsAlreadySubmitted();
  }

  onCategorySubmit(quizInput: QuizInput): void {
    this.quizService.getQuiz(quizInput);
  }

  private checkIfAQuizIsAlreadySubmitted(): void {
    if (this.resultService.isQuizSubmitted) {
      this.quizService.questionsListSubject.next([]);
      this.resultService.isQuizSubmitted = false;
    }
  }

}
