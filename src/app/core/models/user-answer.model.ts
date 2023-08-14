import {Question} from "@models/question/question.model";

export interface UserAnswer{
    question: Question,
    value: string,
    isCorrect: boolean
}
