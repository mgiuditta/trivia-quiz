import {Difficulty} from "../difficulty.model";

export interface Question {
    category: string,
    type: string,
    difficulty: Difficulty,
    question: string,
    correct_answer: string,
    incorrect_answers: string[],
    all_answers: string[]
}
