import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Response } from 'src/app/core/models/data.model';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthService {
  private baseURL: string = "http://localhost:8091";
  private adminLoginURL:string = this.baseURL + "/admin/login";

  constructor(private http: HttpClient) { }

  public adminLogin(request:any): Observable<Response>{
    return this.http.post<Response>(this.adminLoginURL, request);
  }
}
