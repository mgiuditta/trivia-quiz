import { NgModule } from '@angular/core';

import { ResultRoutingModule } from './result-routing.module';
import {SharedModule} from "@shared/shared.module";
import { ResultComponent } from './result.component';
import { ResultScoreComponent } from './components/result-score/result-score.component';
import { ResultHighlightDirective } from './directives/result-highlight.directive';
import { ResultQuestionComponent } from './components/result-question/result-question.component';
import { ResultAnswerDirective } from './directives/result-answer.directive';

@NgModule({
  declarations: [
    ResultComponent,
    ResultScoreComponent,
    ResultHighlightDirective,
    ResultQuestionComponent,
    ResultAnswerDirective
  ],
  imports: [
    SharedModule,
    ResultRoutingModule
  ]
})
export class ResultModule { }
