import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authSvc:AuthService ) { }

  ngOnInit(): void {
    const userData = {
      userName: 'Eduardo',
      password: "1234"
    }
    this.authSvc.login(userData).subscribe((res) => console.log("Login"));
  }

}
