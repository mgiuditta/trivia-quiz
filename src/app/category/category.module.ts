import {NgModule} from '@angular/core';
import {CategoryRoutingModule} from './category-routing.module';
import {SharedModule} from "@shared/shared.module";
import {CategoryComponent} from './category.component';
import {CategoryFormComponent} from './components/category-form/category-form.component';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryFormComponent
  ],
  imports: [
    ReactiveFormsModule,
    SharedModule,
    CategoryRoutingModule
  ],
  exports: [
    CategoryComponent
  ]
})
export class CategoryModule {
}
