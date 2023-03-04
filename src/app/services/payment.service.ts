import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PaymentService {
  private apiUrl = `${environment.API_URL}/api/v1/stripe`;
  // private apiUrl2 = `${environment.API_URL_2}/api/v1/categories/4/products`;


  constructor(private http: HttpClient) { }


  public confirmation(id: string) {
    return this.http.post<string>(`${this.apiUrl}/confirmation/${id}`, {});
  }
  public cancel(id: string) {
    return this.http.post<string>(`${this.apiUrl}/cancel/${id}`, {});
  }
}
