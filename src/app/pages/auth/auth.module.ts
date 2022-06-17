import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AuthRoutingModule } from './auth-routing.module';


import { AuthService } from '../service/auth.service';



@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers:[AuthService]
})
export class AuthModule { }
