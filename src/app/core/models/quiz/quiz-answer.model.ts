import {Question} from "@models/question/question.model";

export interface QuizAnswer {
    value: string,
    question: Question
}
