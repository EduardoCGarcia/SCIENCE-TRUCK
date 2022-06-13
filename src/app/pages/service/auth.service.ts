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
  private isAdmin = new BehaviorSubject<boolean>(false);

  

  AUTH_SERVER: string = 'http://localhost:4000/api/auth';
  private token!: any;

  constructor(private http: HttpClient) {
    this.chackToken();
    
  }

   get isLogged(): Observable<boolean> {
    return this.loggedIn.asObservable();
  } 

  get isLoggedAdmin(): Observable<boolean> {
    return this.isAdmin.asObservable();
  }

  login(authData: User): Observable<UserResponse | void> {
    return this.http
      .post<UserResponse>(`${this.AUTH_SERVER}/login`, authData)
      .pipe(
        map((res: UserResponse) => {
          console.log('Res -> ', res);
          this.saveToken(res.dataUser.accessToken)
          this.saveLocalStorage(res.dataUser.role);
          this.getRole();
          //this.isAdmin.next(false);
          this.loggedIn.next(true);
          if(res.dataUser.role.toUpperCase() == 'ADMIN'){
            this.isAdmin.next(true);
            //alert("Es un admin")
          }else if(res.dataUser.role.toUpperCase() == 'SUSCRIPTOR'){
            this.isAdmin.next(false);
            //alert("Es un subscriptro")
          }
          return res;
        }),
        catchError((err) => this.handlerError(err))
      )
  }

  getRole():boolean{
    const role =localStorage.getItem('role')!;
    //alert(role.toUpperCase()=="ADMIN")
    return role.toUpperCase()=="ADMIN" ? true : false;
  }



  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.loggedIn.next(false); 
    this.isAdmin.next(false);
  }

  
  private chackToken(): void {
    const userToken = localStorage.getItem('token');
    this.token =  userToken;
    const isExpired = helper.isTokenExpired(this.token);
    console.log("this.token   -> ", this.token);
    console.log("isExpired   -> ", isExpired);
    //Cuando el token sea valido devuelve false
    if(isExpired){
      this.logout()
    }else{
      this.loggedIn.next(true);
      if (this.getRole()) {
        this.isAdmin.next(true);
      }
    }
 
    

  }

  private saveLocalStorage(role: string): void {
    localStorage.setItem('role', role);
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


}
