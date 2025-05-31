import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenKey = 'auth_token';

  saveToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  removeToken(): void {
    localStorage.removeItem(this.tokenKey);
  }

  getDecodedToken(): any {
    const token = this.getToken();
    if (!token) return null;

    const payload = token.split('.')[1];
    if (!payload) return null;

    try {
      const decodedPayload = JSON.parse(atob(payload));
      return decodedPayload;
    } catch (error) {
      console.error('Erro ao decodificar token:', error);
      return null;
    }
  }

  isAuthenticated(): boolean {
    const decoded = this.getDecodedToken();
    if (!decoded || !decoded.exp) return false;

    const expirationTime = decoded.exp * 1000;
    return Date.now() < expirationTime;
  }
}
