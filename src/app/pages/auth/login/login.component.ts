import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { UserResponse } from '../../interfaces/user.interface';
import { AuthService } from '../../service/auth.service';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm = this.fb.group({
    email: [''],
    password: [''],
  })
  
  
  constructor(
    private authSvc: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private usuario:DataService
  ) { }
  
  ngOnInit(): void {
  }

  onLogin(): void {
    const formValue = this.loginForm.value;
    this.authSvc.login(formValue).subscribe(res => {
      if (res) {
        location.replace('/divulgadores')
      }
    })
  }
}
