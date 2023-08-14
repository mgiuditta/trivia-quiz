import {Injectable} from '@angular/core';
import {QuizResult} from "@models/quiz/quiz-result.model";
import {QuizAnswer} from "@models/quiz/quiz-answer.model";
import {Question} from "@models/question/question.model";
import {UserAnswer} from "@models/user-answer.model";

@Injectable({
    providedIn: 'root'
})
export class ResultService {

    isQuizSubmitted: boolean = false;
    quizResult: QuizResult = {} as QuizResult;

    constructor() {}

    getQuizResult(): QuizResult {
        return this.quizResult;
    }

    resetQuizResult(){
        this.isQuizSubmitted = false;
        this.quizResult = {} as QuizResult;
    }

    setQuizResult(quizAnswers: QuizAnswer[]): void {
        const userAnswers: UserAnswer[] = [];
        let score: number = 0;

        quizAnswers.forEach((quizAnswer: QuizAnswer) => {
            const correctAnswer: boolean = this.checkIfAnswerIsRight(quizAnswer.value, quizAnswer.question);
            score += correctAnswer ? 1 : 0;
            const userAnswer: UserAnswer = {question: quizAnswer.question, value: quizAnswer.value, isCorrect: correctAnswer};
            userAnswers.push(userAnswer);

        });
        this.isQuizSubmitted = true
        this.quizResult = {score: score, userAnswers: userAnswers};

    }


    private checkIfAnswerIsRight(userAnswer: string, question: Question): boolean {
        return userAnswer === question.correct_answer;
    }
}
