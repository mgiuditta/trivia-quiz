import {Question} from "@models/question/question.model";

export interface QuestionsResponse {
  response_code: number,
  results: Question[]
}
