import {UserAnswer} from "@models/user-answer.model";

export interface QuizResult {
    score: number,
    userAnswers: UserAnswer[]
}
