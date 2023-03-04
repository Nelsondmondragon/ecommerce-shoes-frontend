import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { CreateUser, User } from '../model/user.model';
import { Auth } from '../model/auth.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = `${environment.API_URL}/api/v1`;

  constructor(private http: HttpClient) { }


  create(dto: CreateUser) {
    return this.http.post<Auth>(`${this.apiUrl}/auth/register`, dto)
  }


  profile(token: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.http.get<User>(`${this.apiUrl}/users/profile`, { headers: headers })
  }


  // getAll() {
  //   return this.http.get<User[]>(this.apiUrl);
  // }
}
