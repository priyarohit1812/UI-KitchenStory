import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class CommonFoodItemService {
  private baseURL: string = "http://localhost:8091";
  private baseFoodItemURL = this.baseURL + "/user/fooditem";

  constructor(private http: HttpClient) {
  }

  getAllFoodItems(): Observable<Response> {
    return this.http.get<Response>(this.baseFoodItemURL + '/list');
  }
  
  getFoodItem(foodItemId: any): Observable<Response> {
    return this.http.get<Response>(this.baseFoodItemURL + `/${foodItemId}`);
  }
}
