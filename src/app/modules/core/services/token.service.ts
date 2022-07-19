import { Injectable } from '@angular/core';

const TOKEN_KEY = 'auth-token';
const REFRESHTOKEN_KEY = 'auth-refreshtoken';
const REFRESHTOKEN_EXPIRES_AT_KEY = 'auth-refreshtoken-expires-at';
const USER_KEY = 'auth-user';

@Injectable({
  providedIn: 'root'
})

export class TokenService {

  constructor() { }

  clearStorage(): void {
    window.sessionStorage.clear();
  }

  saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
    const user = this.getUser();
    if (user.id) {
      this.saveUser({ ...user, accessToken: token });
    }
  }

  getToken(): string | null {
    return window.sessionStorage.getItem(TOKEN_KEY);
  }

  saveRefreshToken(token: string, expireDate: Date): void {
    window.sessionStorage.removeItem(REFRESHTOKEN_KEY);
    window.sessionStorage.setItem(REFRESHTOKEN_KEY, token);
    window.sessionStorage.setItem(REFRESHTOKEN_EXPIRES_AT_KEY, expireDate.toJSON());
  }

  getRefreshToken(): string | null {
    return window.sessionStorage.getItem(REFRESHTOKEN_KEY);
  }

  getRefreshTokenExpireDate(): string | null {
    return window.sessionStorage.getItem(REFRESHTOKEN_EXPIRES_AT_KEY);
  }

  saveUser(user: any): void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): any {
    const user = window.sessionStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
}
