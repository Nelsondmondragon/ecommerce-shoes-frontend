import { HttpClient, HttpErrorResponse, HttpHeaders, HttpStatusCode } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Auth } from '../model/auth.model';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = `${environment.API_URL}/api/v1/auth`;


  constructor(private http: HttpClient, private tokenService: TokenService) { }


  login(email: string, password: string) {
    return this.http.post<Auth>(`${this.apiUrl}/authenticate`, { email, password })
      .pipe(
        tap(response => this.tokenService.saveToken(response.token)),
        catchError((error: HttpErrorResponse) => this.throwError(error))
      );
  }


  throwError(error: HttpErrorResponse) {
    if (error.status === HttpStatusCode.Unauthorized) {
      console.log(error.error.message);
      return throwError(() => error.error.message);
    }
    return throwError(() => 'Error inesperado');
  }
}
