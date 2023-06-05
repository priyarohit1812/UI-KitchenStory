import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FoodItem, Response } from 'src/app/core/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class UserFoodItemService {
  private baseURL: string = "http://localhost:8091";
  private baseFoodItemURL = this.baseURL + "/user/fooditem";
  private foodItemBehavior: BehaviorSubject<FoodItem[]>;
  foodItemObservable: Observable<FoodItem[]>;

  constructor(private http: HttpClient) {
    this.foodItemBehavior =new BehaviorSubject<FoodItem[]>([]);
    this.foodItemObservable = this.foodItemBehavior.asObservable();
  }

  getFoodItemByCategory(foodCategoryId: any): Observable<Response> {
    return this.http.get<Response>(this.baseFoodItemURL + '/list' + `/${foodCategoryId}`);
  }

  getFoodItemByBrand(key: any): Observable<Response> {
    return this.http.get<Response>(this.baseFoodItemURL + '/searchByBrand' + `/${key}`);
  }

  searchFoodItem(key: any): Observable<Response> {
    return this.http.get<Response>(this.baseFoodItemURL + '/search' + `/${key}`);
  }

  passFoodItems(foodItems:FoodItem[]){
    this.foodItemBehavior.next(foodItems);
  }
}
