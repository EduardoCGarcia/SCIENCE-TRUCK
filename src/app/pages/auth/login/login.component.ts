import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onLogin(form:any): void {
    //console.log("Login",form.value);
    this.authService.login(form.value).subscribe(res => {
      this.router.navigateByUrl('/inicio');
    });
    
  }
}
