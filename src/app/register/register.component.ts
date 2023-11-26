import { Component } from '@angular/core';
import { RegisterRequest } from '../models';
import { HttpServiceService } from '../http-service.service';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerData: RegisterRequest = {
    firstName: '',
    lastName: '',
    username: '',
    password: ''
  }

  successFlag: boolean = false;

  constructor(private router: Router, private apiService: HttpServiceService) {}

  registerFunction(data: any) {
    this.registerData = {
      firstName: data.firstName,
      lastName: data.lastName,
      username: data.username,
      password: data.password
    };

    this.apiService.registerRequest(this.registerData).subscribe({
      error: (err) => {
        alert(err.message);
      },
      complete: () => {
        this.successFlag = true;
      }
    });
  }
}
