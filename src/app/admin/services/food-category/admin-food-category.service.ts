import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodCategory } from 'src/app/core/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class AdminFoodCategoryService {
  private baseURL: string = "http://localhost:8091";
  private baseFoodCategoryURL = this.baseURL + "/admin/foodcategory";

  constructor(private http: HttpClient) { }

  saveFoodCategory(foodCategory: FoodCategory): Observable<any> {
    return this.http.post(this.baseFoodCategoryURL + '/save', foodCategory);
  }

  deleteFoodCategory(foodCategoryId: any): Observable<any> {
    return this.http.delete(this.baseFoodCategoryURL + `/${foodCategoryId}`);
  }
}
