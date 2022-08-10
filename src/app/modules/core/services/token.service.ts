import { Injectable } from '@angular/core';
import jwtDecode from 'jwt-decode';
import jwt_decode from 'jwt-decode';

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
    window.localStorage.clear();
  }

  saveToken(token: string) {
    window.localStorage.removeItem(TOKEN_KEY);
    window.localStorage.setItem(TOKEN_KEY, token);
    const user = this.getUser();
    if (user.id) {
      this.saveUser({ ...user, accessToken: token });
    }
  }

  getToken(): string | null {
    return window.localStorage.getItem(TOKEN_KEY);
  }

  saveRefreshToken(token: string, expireDate: Date): void {
    window.localStorage.removeItem(REFRESHTOKEN_KEY);
    window.localStorage.setItem(REFRESHTOKEN_KEY, token);
    window.localStorage.setItem(REFRESHTOKEN_EXPIRES_AT_KEY, expireDate.toJSON());
  }

  getRefreshToken(): string | null {
    return window.localStorage.getItem(REFRESHTOKEN_KEY);
  }

  getRefreshTokenExpireDate(): string | null {
    return window.localStorage.getItem(REFRESHTOKEN_EXPIRES_AT_KEY);
  }

  saveUser(user: any): void {
    window.localStorage.removeItem(USER_KEY);
    window.localStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  getUser(): any {
    const user = window.localStorage.getItem(USER_KEY);
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }
 
  getUserRole(): string | null {
    const jwt = window.localStorage.getItem(TOKEN_KEY);
    if(jwt){
      const decodedToken: any = jwtDecode(jwt);
      const role = decodedToken['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'] as string;
      return role;
    } else {
      return null;
    }
  }
}
