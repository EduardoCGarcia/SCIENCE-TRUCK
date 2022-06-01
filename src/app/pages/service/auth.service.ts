import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User, UserResponse } from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${environment.API_URL}login`, authData)
      .pipe(
        map((res: UserResponse) => {
          console.log("Res -> ", res);
          //saveToken()
        }),
        catchError((err) => this.handlerError(err))
      )

  }
  logout(): void { }
  private readToken(): void { }
  private saveToken(): void { }
  
  private handlerError(err: { message: any; }): Observable<never> {
    let errorMessage = "An error ocurred retrienving data";
    if (err) {
      errorMessage = `Error: code ${err.message}`
    }
    window.alert(errorMessage);
    return throwError(errorMessage);

  }
}
