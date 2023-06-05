import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class CommonFoodCategoryService {
  private baseURL: string = "http://localhost:8091";
  private baseFoodCategoryURL = this.baseURL + "/user/foodcategory";
  
  constructor(private http: HttpClient) { }

  getAllFoodCategories(): Observable<Response> {
    return this.http.get<Response>(this.baseFoodCategoryURL + '/list');
  }
}
