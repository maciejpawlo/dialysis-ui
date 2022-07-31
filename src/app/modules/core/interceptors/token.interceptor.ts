import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { TokenService } from '../services/token.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private tokenService: TokenService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('authenticate') || request.url.includes('refreshtoken')){
      return next.handle(request);
    }

    //apply jwt to header
    const jwtToken = this.tokenService.getToken() ?? '';

    request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${jwtToken}`
      }
    })

    return next.handle(request);
  }
}
