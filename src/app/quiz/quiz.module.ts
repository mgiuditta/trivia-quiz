import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {QuizRoutingModule} from './quiz-routing.module';
import {QuizComponent} from './quiz.component';
import {SharedModule} from "@shared/shared.module";
import {QuizQuestionComponent} from './components/quiz-question/quiz-question.component';
import {ReactiveFormsModule} from "@angular/forms";
import { AnswerHighlightDirective } from './directives/answer-highlight.directive';

@NgModule({
    declarations: [
        QuizComponent,
        QuizQuestionComponent,
        AnswerHighlightDirective
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        SharedModule,
        QuizRoutingModule
    ],
    exports: [
        QuizComponent
    ]
})
export class QuizModule {
}
