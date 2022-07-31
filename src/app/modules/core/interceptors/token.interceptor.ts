import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { BehaviorSubject, filter, Observable, Subject, throwError} from 'rxjs';
import { take, switchMap, catchError } from 'rxjs/operators';
import { TokenService } from '../services/token.service';
import { AuthenticationService } from '../services/authentication.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private refreshTokenInProgress = false;
  private refreshTokenSubject: Subject<any> = new BehaviorSubject<any>(null);

  constructor(
    private tokenService: TokenService,
    private auth: AuthenticationService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(request.url.includes('authenticate') || request.url.includes('refreshtoken')){
      return next.handle(request);
    }

    this.applyToken(request);

    return next.handle(request).pipe(
      catchError((err) => {
        if (err instanceof HttpErrorResponse && err.status === 401) {
          console.log(err.status);
          return this.handle401Error(request, next);
        }
        return throwError(() => err);
      }));
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler){
    if (!this.refreshTokenInProgress) {
      this.refreshTokenInProgress = true;
      this.refreshTokenSubject.next(null);
        return this.auth.refreshToken().pipe(
          switchMap((token) => {
            this.refreshTokenInProgress = false;
            this.tokenService.saveToken(token.accessToken!);
            this.tokenService.saveRefreshToken(token.refreshToken!, new Date(token.refreshTokenExpireDate!))
            this.refreshTokenSubject.next(token.accessToken);
            return next.handle(this.applyToken(request));
          }),
          catchError((err) => {
            this.refreshTokenInProgress = false;
            //this.tokenService.signOut();
            return throwError(() => err);
          })
        );
    }

    return this.refreshTokenSubject.pipe(
      filter(token => token !== null),
      take(1),
      switchMap((token) => next.handle(this.applyToken(request))));
  }


  applyToken(request: HttpRequest<any>): HttpRequest<any> {
    const jwtToken = this.tokenService.getToken() ?? '';

    return request = request.clone({
      setHeaders: {
        'Authorization': `Bearer ${jwtToken}`
      }
    })
  }}

