import {Component, OnInit} from '@angular/core';
import {ResultService} from "@core/services/result.service";
import {QuizResult} from "@models/quiz/quiz-result.model";
import {Router} from "@angular/router";
import {QuizService} from "@core/services/quiz.service";

@Component({
    selector: 'app-result',
    templateUrl: './result.component.html'
})
export class ResultComponent implements OnInit {


    quizResults!: QuizResult;
    score: number = 0;

    constructor(private resultService: ResultService, private router: Router, private quizService: QuizService) {
    }

    ngOnInit(): void {
        this.quizResults = this.resultService.getQuizResult();
        this.score = this.quizResults.score;
    }

    onClick(): void {
        this.resetQuiz();
        this.router.navigate(['/'])
    }

    resetQuiz(): void {
        this.quizService.resetQuizList(); // reset category form
        this.resultService.resetQuizResult(); // reset quiz result
    }


}
