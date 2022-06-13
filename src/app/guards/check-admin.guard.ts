import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { map, Observable, take } from 'rxjs';
import { AuthService } from '../pages/service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAdminGuard implements CanActivate {
  constructor(private authSvc:AuthService){
     
  }
  canActivate(): Observable<boolean> { //Es para saber si un usuario puede acceder a una ruta o no 
    return this.authSvc.isLoggedAdmin.pipe(
      take(1),
      map((isLoggedAdmin:boolean) => !isLoggedAdmin) //si nuestro usuario esta logueado no queremos que acceda a la ruta
    );
  }
    
  
}
