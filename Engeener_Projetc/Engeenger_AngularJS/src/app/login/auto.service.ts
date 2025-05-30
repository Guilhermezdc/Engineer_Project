import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

interface LoginResponse {
  success: boolean;
  token?: string;
  message?: string;
}

export class AuthService {
  private apiUrl = "http://localhost:5003/login";

  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<LoginResponse> {
    return this.http.post<LoginResponse>(this.apiUrl, { email, password });
  }
}

