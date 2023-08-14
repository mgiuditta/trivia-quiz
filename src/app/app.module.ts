import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {CoreModule} from "@core/core.module";
import {CategoryModule} from "./category/category.module";
import {QuizModule} from "./quiz/quiz.module";
import {ResultModule} from "./result/result.module";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CategoryModule,
        CoreModule,
        ResultModule,
        QuizModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
