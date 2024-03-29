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

  ngAfterViewInit() {
    document.getElementById("myForm")?.addEventListener("submit", function(e) {
      if ((document.getElementById('myForm') as HTMLFormElement).checkValidity() === false) {
        e.preventDefault();
        e.stopPropagation();
      }
      document.getElementById("myForm")?.classList.add("was-validated");
    });
  }

  ngOnInit(){
    if(localStorage.getItem('accessToken') != null){
      this.router.navigate(['/']);
    }
  }

  loginFunction(data: any) {

    this.loginData = {
      username: data.username,
      password: data.password
    }

    this.apiService.loginRequest(data).subscribe({
      next: (responseData) => {
        localStorage.setItem('accessToken', responseData.jwt);
        localStorage.setItem('refreshToken', responseData.refreshToken);
        localStorage.setItem('admin', responseData.admin.toString());
        this.router.navigate(['/']);
      },
      error: (err) => {
        alert(err.message);
      }
    });
  }
}
