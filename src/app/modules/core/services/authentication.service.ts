import { Injectable } from '@angular/core';
import { AuthenticateRequest, RefreshTokenRequest } from '../api/models';
import { AuthService } from '../api/services';
import { TokenService } from './token.service';
import jwt_decode from 'jwt-decode';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(
    private authClient: AuthService,
    private tokenService: TokenService
  ) { }

  login(userName: string, password: string){
    const request: AuthenticateRequest = {
      userName: userName,
      password: password
    };
    this.authClient.apiAuthAuthenticatePost$Json({body: request})
      .subscribe({
        next: (data) => {
          console.log(data);
          this.tokenService.saveToken(data.accessToken!);
          this.tokenService.saveRefreshToken(data.refreshToken!, new Date(data.refreshTokenExpireDate!));
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  logout(){
    //clear data from session storage
    this.tokenService.clearStorage();
  }

  refreshToken(){
    const token = this.tokenService.getRefreshToken();

    const request: RefreshTokenRequest = {
      refreshToken: token!
    };

    this.authClient.apiAuthRefreshTokenPost$Json({body: request})
      .subscribe({
        next: (data) => {
          console.log(data);
          this.tokenService.saveToken(data.accessToken!);
          this.tokenService.saveRefreshToken(data.refreshToken!, new Date(data.refreshTokenExpireDate!));
        },
        error: (err) => {
          console.error(err);
        }
      });
  }

  isLoggedIn(): boolean{
    //check both accessToken and refreshToken expire time
    //if expired return false
    const accessToken = this.tokenService.getToken();
    if(!accessToken) {
      return false;
    }
    const refreshTokenExpireDate = new Date(this.tokenService.getRefreshTokenExpireDate()!);
    const decodedToken: any = jwt_decode(accessToken!);
    let accessTokenExpireDateText = decodedToken['exp'] as number;
    const accessTokenExpireDate = new Date(accessTokenExpireDateText * 1000);
    const now = new Date();
    if(accessTokenExpireDate < now || refreshTokenExpireDate < now){
      return false;
    } else {
      return true;
    }
  }
}
