import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../model/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = `${environment.API_URL}/api/v1/products`;
  // private apiUrl2 = `${environment.API_URL_2}/api/v1/categories/4/products`;


  constructor(private http: HttpClient) { }


  getAll() {
    // console.log(token);
    // let headers = new HttpHeaders();
    // headers = headers.set('Authorization', `Bearer ${token}`);
    return this.http.get<Product[]>(this.apiUrl);
  }
}
