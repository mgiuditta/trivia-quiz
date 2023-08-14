import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from "@angular/forms";
import {HtmlDecodePipe} from './pipes/html-decode.pipe';
import { AlertComponent } from './components/alert/alert.component';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  declarations: [
    HtmlDecodePipe,
    AlertComponent,
    SpinnerComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AlertComponent,
    CommonModule,
    FormsModule,
    HtmlDecodePipe,
    SpinnerComponent
  ]
})
export class SharedModule {
}
