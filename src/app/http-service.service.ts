import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url: string = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }

  registerRequest(data: RegisterRequest) : Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(this.url + "auth/register", data);
  }
}
