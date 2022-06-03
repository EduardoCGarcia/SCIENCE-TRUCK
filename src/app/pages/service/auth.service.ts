import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, map, Observable, tap, throwError } from 'rxjs';
import { JwtResponse } from '../interfaces/jwt-response';
import { User } from '../interfaces/user';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  AUTH_SERVER: string = 'http://localhost:4000/api/auth';
  authSubject = new BehaviorSubject(false);
  private token!: string;
  constructor(private httpClient: HttpClient) { }

  register(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/register`,
      user).pipe(tap(
        (res: JwtResponse) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  login(user: User): Observable<JwtResponse> {
    return this.httpClient.post<JwtResponse>(`${this.AUTH_SERVER}/login`,
      user).pipe(tap(
        (res: JwtResponse) => {
          if (res) {
            // guardar token
            this.saveToken(res.dataUser.accessToken, res.dataUser.expiresIn);
          }
        })
      );
  }

  logout(): void {
    this.token = '';
    localStorage.removeItem("ACCESS_TOKEN");
    localStorage.removeItem("EXPIRES_IN");
  }

  private saveToken(token: string, expiresIn: string): void {
    localStorage.setItem("ACCESS_TOKEN", token);
    localStorage.setItem("EXPIRES_IN", expiresIn);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token != localStorage.getItem("ACCESS_TOKEN");
    }
    return this.token;
  }
}
