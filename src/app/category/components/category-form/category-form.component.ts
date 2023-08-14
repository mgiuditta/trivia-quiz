import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Category} from "@models/category/category.model";
import {CategoryService} from "@core/services/category.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Difficulty} from "@models/difficulty.model";
import {QuizInput} from "@models/quiz/quiz-input.model";

@Component({
  selector: 'trivia-category-form',
  templateUrl: './category-form.component.html'
})
export class CategoryFormComponent implements OnInit {

  categories: Category[] = [];
  categoryForm!: FormGroup;
  difficulties: Difficulty[] = ["easy", "medium", "hard"];

  @Output() categorySubmit: EventEmitter<QuizInput> = new EventEmitter<QuizInput>;

  constructor(private categoryService: CategoryService,
              private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
    this.categoryService.getCategories().subscribe(
      (categories: Category[]) => this.categories = categories
    )
  }

  get invalidForm(): boolean {
    return this.categoryForm.invalid;
  }

  onSubmit(): void {
    if (this.categoryForm.invalid) return;

    const difficulty: Difficulty = this.categoryForm.get('difficulty')?.value
    const id: number = this.categoryForm.get('category')?.value

    const quizInput: QuizInput = {idCategory: id, difficulty: difficulty}
    this.categorySubmit.emit(quizInput);
  }

  private initForm(): void {
    this.categoryForm = this.fb.group({
      category: ['', Validators.required],
      difficulty: ['', Validators.required]
    })
  }

}
