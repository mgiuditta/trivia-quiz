import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpParams} from '@angular/common/http';
import {Question} from '@models/question/question.model';
import {BehaviorSubject, catchError, Observable, of, Subject} from 'rxjs';
import {map, tap} from 'rxjs/operators';
import {QuestionsResponse} from '@models/question/questions-response.model';
import {QuizInput} from '@models/quiz/quiz-input.model';
import {mergeArrayWithItems} from "@core/utils/common-functions";

@Injectable({
  providedIn: 'root',
})
export class QuizService {

  errorSubject: Subject<string> = new Subject<string>();
  questionsListSubject: BehaviorSubject<Question[]> = new BehaviorSubject<Question[]>([]);

  private readonly DEFAULT_AMOUNT: number = 5;
  private readonly QUESTION_URI: string = 'https://opentdb.com/api.php';

  constructor(private http: HttpClient) {
  }

  getQuiz(quizInput: QuizInput, amount: number = this.DEFAULT_AMOUNT): void {
    const params: HttpParams = this.createRequestParams(amount, quizInput);

    this.http
      .get<QuestionsResponse>(this.QUESTION_URI, {params})
      .pipe(
        map((response: QuestionsResponse) => this.combineAnswersForQuestions(response.results)),
        tap((questions: Question[]) => this.questionsListSubject.next(questions)),
        catchError((error: HttpErrorResponse): Observable<Question[]> => {
          this.errorSubject.next(error.statusText)
          return of([]);
        })
      )
      .subscribe();
  }

  private createRequestParams(amount: number, quizInput: QuizInput): HttpParams {
    return new HttpParams()
      .set('amount', amount.toString())
      .set('category', quizInput.idCategory)
      .set('difficulty', quizInput.difficulty);
  }

  private combineAnswersForQuestions(questions: Question[]): Question[] {
    return questions.map((question: Question) => this.combineAnswers(question));
  }

  private combineAnswers(question: Question): Question {
    question.all_answers = mergeArrayWithItems(question.incorrect_answers,question.correct_answer)
    return question;
  }
}
