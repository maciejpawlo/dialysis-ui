import { Injectable } from '@angular/core';
import { AuthenticateRequest, AuthenticateResponse, RefreshTokenRequest } from '../api/models';
import { AuthService } from '../api/services';
import { TokenService } from './token.service';
import jwt_decode from 'jwt-decode';
import { lastValueFrom } from 'rxjs';

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
    return this.authClient.apiAuthAuthenticatePost$Json({body: request});
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

    return this.authClient.apiAuthRefreshTokenPost$Json({body: request});
  }

  async isLoggedIn(){
    //check both accessToken and refreshToken expire time
    //if expired return false
    const accessToken = this.tokenService.getToken();
    if(!accessToken) {
      return false;
    }
    const refreshTokenExpireDate = new Date(this.tokenService.getRefreshTokenExpireDate()!);
    const decodedToken: any = jwt_decode(accessToken!);
    const accessTokenExpireDateText = decodedToken['exp'] as number;
    const accessTokenExpireDate = new Date(accessTokenExpireDateText * 1000);
    const now = new Date();

    if(accessTokenExpireDate < now){
      let refreshResult = false;
      if(!(refreshTokenExpireDate < now)){

        let result = await lastValueFrom(this.refreshToken());
        if(result.accessToken){
          this.tokenService.saveToken(result.accessToken);
          this.tokenService.saveRefreshToken(result.refreshToken!, new Date(result.refreshTokenExpireDate!))
          refreshResult = true;
        }
      }
      console.log('refersh result: ', refreshResult)
      return refreshResult;
    } else {
      return true;
    }
  }
}
