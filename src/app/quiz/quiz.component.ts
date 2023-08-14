import {Component, OnDestroy, OnInit, QueryList, ViewChildren} from '@angular/core';
import {QuizService} from "@core/services/quiz.service";
import {Subscription} from "rxjs";
import {Question} from "@models/question/question.model";
import {QuizQuestionComponent} from "./components/quiz-question/quiz-question.component";
import {QuizAnswer} from "@models/quiz/quiz-answer.model";
import {ResultService} from "@core/services/result.service";
import {Router} from "@angular/router";

@Component({
  selector: 'trivia-quiz',
  templateUrl: './quiz.component.html'
})
export class QuizComponent implements OnInit, OnDestroy {

  allQuestionsAnswered: boolean = false;
  errorMessage: string = "";
  isLoading: boolean = false;
  questions: Question[] = [];

  @ViewChildren(QuizQuestionComponent) questionComponents: QueryList<QuizQuestionComponent> = new QueryList<QuizQuestionComponent>();

  private errorSubscription: Subscription = new Subscription();
  private quizSubscription: Subscription = new Subscription();

  constructor(private quizService: QuizService,
              private resultService: ResultService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.subscribeQuizService();
    this.subscribeErrorService();
  }

  ngOnDestroy() {
    this.quizSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
  }

  checkAnswers(): void {
    this.allQuestionsAnswered = true;

    for (const quizQuestionComponent of this.questionComponents) {
      if (!quizQuestionComponent.answerSelected) {
        this.allQuestionsAnswered = false;
        break;
      }
    }
  }

  onQuizSubmit(): void {
    this.submitQuiz();
  }


  private submitQuiz(): void {

    const usersAnswers: QuizAnswer[] = [];

    this.questionComponents.forEach((quizQuestionComponent: QuizQuestionComponent): void => {
      const userAnswer: string = quizQuestionComponent.selectedAnswer;
      const question: Question = quizQuestionComponent.question;
      const answer: QuizAnswer = {value: userAnswer, question: question};
      usersAnswers.push(answer);
    })

    this.resultService.setQuizResult(usersAnswers);
    this.router.navigate(['/result']);
  }

  private subscribeQuizService(): void {
    this.quizSubscription = this.quizService.questionsListSubject
      .subscribe({
        next: (questions: Question[]): void => {
          this.questions = questions;
          this.allQuestionsAnswered = false;
          this.isLoading = false;
        }
      })
  }

  private subscribeErrorService(): void {
    this.errorSubscription = this.quizService.errorSubject
      .subscribe({
        next: (error: string): void => {
          this.errorMessage = error + " on loading quiz";
          this.isLoading = false;
        }
      })
  }


}
