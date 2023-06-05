import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Response } from 'src/app/core/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private baseURL: string = "http://localhost:8091";
  private basecartURL = this.baseURL + "/user/cart";

  private cartBehavior: BehaviorSubject<any>;
  cartObservable: Observable<any>;

  constructor(private http: HttpClient) {
    this.cartBehavior = new BehaviorSubject(true);
    this.cartObservable = this.cartBehavior.asObservable();
  }

  addCart(foodItemId: number): Observable<any> {
    return this.http.post(this.basecartURL + `/add/${foodItemId}`, null);
  }

  updateCart(foodItemId: number, quantity: number): Observable<any> {
    return this.http.post(this.basecartURL + `/update/${foodItemId}/${quantity}`, null);
  }

  getCart(): Observable<Response> {
    return this.http.get<Response>(this.basecartURL)
  }

  setCartUpdated(isUpdated: boolean) {
    this.cartBehavior.next(isUpdated);
  }
}
