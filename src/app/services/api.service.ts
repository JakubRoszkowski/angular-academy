import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Login } from '../models/login';
import { Permission } from '../models/permission';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  sendCredentials(login: string, password: string): Observable<Login> {
    return this.http
      .post<Login>(`${environment.url}/login`, {
        login,
        password,
      })
      .pipe(
        catchError((error) => {
          console.log('Handle error');

          return throwError(() => error);
        })
      );
  }

  getUserRoles(token: string): Observable<Permission> {
    return this.http.post<Permission>(`${environment.url}/permission`, {
      token,
    });
  }
}
