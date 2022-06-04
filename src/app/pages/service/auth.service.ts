import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from 'rxjs';

import { UserResponse, User, Roles } from '../interfaces/user.interface';
import { catchError, map, tap } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt'

const helper = new JwtHelperService();


@Injectable({
  providedIn: 'root'
})


export class AuthService {

  private loggedIn = new BehaviorSubject<boolean>(false);

  private user = new BehaviorSubject<any>(null);
  AUTH_SERVER: string = 'http://localhost:4000/api/auth';
  private token!: any;

  constructor(private http: HttpClient) {
    this.chackToken();
  }

  get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${this.AUTH_SERVER}/login`, authData)
      .pipe(
        map((res: UserResponse) => {
          console.log('Res -> ', res);
          this.saveToken(res.dataUser.accessToken)
          this.loggedIn.next(true);
          return res;
        }),
        catchError((err) => this.handlerError(err))
      )
  }

  logout(): void {
    localStorage.removeItem('token');
    this.loggedIn.next(false);  
  }

  
  private chackToken(): void {
    const userToken = localStorage.getItem('token');
    this.token =  userToken;
    const isExpired = helper.isTokenExpired(this.token);
    //console.log("this.token   -> ", this.token);
    console.log("isExpired   -> ", isExpired);
    //Cuando el token sea valido devuelve false 
    isExpired ? this.logout() : this.loggedIn.next(true);
    

  }
  private saveToken(accessToken: string): void {
    localStorage.setItem('token', accessToken)
  }

  private handlerError(err: any): Observable<never> {
    let errorMessage = 'An error ocured retrieving data';
    if (err) {
      errorMessage = `Error: code ${err.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage)
  }

  register(user: User): Observable<UserResponse> {
    return this.http.post<UserResponse>(`${this.AUTH_SERVER}/register`,
      user).pipe(
        map((res: UserResponse) => {
          //this.saveToken(res.dataUser.accessToken)
          //this.loggedIn.next(true);
          return res;
        }),
        catchError((err) => this.handlerError(err))
      );
  }





  /* 
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
    logout(): void {
      this.token = '';
      localStorage.removeItem("ACCESS_TOKEN");
      localStorage.removeItem("EXPIRES_IN");
      this.loggedIn.next(false);
    }
  
    private saveToken(token: string, expiresIn: string): void {
      localStorage.setItem("ACCESS_TOKEN", token);
      localStorage.setItem("EXPIRES_IN", expiresIn);
      this.token = token;
    }
  
    private checckToken(): void{
      const userToken = this.getToken();
      const isExpired = helper.isTokenExpired(userToken);
      console.log('isExpired 111 -> ', isExpired);
      
    }
  
    private getToken(): string {
      if (!this.token) {
        this.token != localStorage.getItem("ACCESS_TOKEN");
      }
      return this.token;
    }
  
    private handlerError(err:Error): Observable<never> {
      let errorMessage = 'An errror occured retrienving data';
      if (err) {
        errorMessage = `Error: code ${err.message}`;
      }
      window.alert(errorMessage);
      return throwError(errorMessage);
    } */



}
