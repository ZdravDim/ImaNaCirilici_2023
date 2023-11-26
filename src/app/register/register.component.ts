import { Component } from '@angular/core';
import { RegisterRequest } from '../models';
import { HttpServiceService } from '../http-service.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(apiService: HttpServiceService) {
    
  }

  registerFunction() {
    alert("ASDA");
  }
}
