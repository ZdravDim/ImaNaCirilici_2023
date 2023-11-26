import { Component } from '@angular/core';
import { LoginRequest, LoginResponse } from '../models';
import { Router } from '@angular/router';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginData: LoginRequest = {
    username: '',
    password: ''
  }

  constructor(private router: Router, private apiService: HttpServiceService) {}
  
  loginFunction(data: any) {
    this.loginData = {
      username: data.username,
      password: data.password
    }

    this.apiService.loginRequest(data).subscribe({
      error: (err) => {
        alert(err.message);
      },
      next: (responseData) => {
        localStorage.setItem('accessToken', responseData.jwt);
        localStorage.setItem('refreshToken', responseData.refreshToken);
        this.router.navigate(['/']);
      }
    });
  }
}
