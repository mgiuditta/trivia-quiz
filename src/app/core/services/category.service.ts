import {Injectable} from '@angular/core';
import {map, Observable} from "rxjs";
import {Category} from "@models/category/category.model";
import {HttpClient} from "@angular/common/http";
import {CategoryResponse} from "@models/category/category-response.model";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {


  private readonly CATEGORY_URI: string = "https://opentdb.com/api_category.php";

  constructor(private http: HttpClient) {
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<CategoryResponse>(this.CATEGORY_URI)
      .pipe(
        map((categoryResponse: CategoryResponse) => categoryResponse.trivia_categories)
      );
  }
}
