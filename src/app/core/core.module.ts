import {NgModule} from '@angular/core';
import {SharedModule} from "../shared/shared.module";
import {HttpClientModule} from "@angular/common/http";
import {HomeComponent} from '@core/components/home/home.component';
import {QuizModule} from "../quiz/quiz.module";
import {CategoryModule} from "../category/category.module";


@NgModule({
    declarations: [
        HomeComponent
    ],
    imports: [
        CategoryModule,
        QuizModule,
        HttpClientModule,
        SharedModule
    ],
    exports: [
        HomeComponent
    ]
})
export class CoreModule {
}
