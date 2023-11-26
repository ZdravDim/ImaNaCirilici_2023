import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginRequest, LoginResponse, RegisterRequest, RegisterResponse } from './models';
import { Observable } from 'rxjs';
import { HtmlParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  url: string = 'http://localhost:8080/api/';
  constructor(private httpClient: HttpClient) { }

  registerRequest(data: RegisterRequest) : Observable<RegisterResponse> {
    return this.httpClient.post<RegisterResponse>(this.url + 'auth/register', data);
  }

  loginRequest(data: LoginRequest) : Observable<LoginResponse> {
    return this.httpClient.post<LoginResponse>(this.url + 'login', data);
  }

  get(path: string) : Observable<any> {
    return this.httpClient.get<any>(this.url + path, {
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  post(path: string, data: any) : Observable<any> {
    return this.httpClient.post<any>(this.url + path, data, {
      headers: {
        "Content-Type": "application/json",
        "Authorization": "Bearer " + localStorage.getItem('accessToken')
      }
    });
  }
}
