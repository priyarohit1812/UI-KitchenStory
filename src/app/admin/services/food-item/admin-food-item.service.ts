import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FoodCategory, FoodItem, Response } from 'src/app/core/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class AdminFoodItemService {
  private baseURL: string = "http://localhost:8091";
  private baseFoodItemURL = this.baseURL + "/admin/fooditem";

  constructor(private http: HttpClient) {
  }

  saveFoodItem(foodItem: FoodItem): Observable<any> {
    return this.http.post(this.baseFoodItemURL + '/save', foodItem);
  }

  uploadImage(imageFile: File, foodItemId: number): Observable<any> {
    let formData: FormData = new FormData();
    formData.append("file", imageFile);
    formData.append("foodItemId", foodItemId.toString());

    return this.http.post(this.baseFoodItemURL + '/upload/image', formData);
  }

  deleteFoodItem(foodItemId: any): Observable<any> {
    return this.http.delete(this.baseFoodItemURL + `/${foodItemId}`);
  }
}
