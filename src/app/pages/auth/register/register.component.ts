import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = this.fb.group({
    name:[''],
    email: [''],
    password: [''],
  })
  constructor(
    private authSvc: AuthService,
    private fb: FormBuilder,
    private router: Router
  ) { }

  ngOnInit(): void {
  }


  onRegister(): void {
    const formValue = this.registerForm.value;
    this.authSvc.register(formValue).subscribe(res => {
      location.replace('/productos')
    });
  }
}
