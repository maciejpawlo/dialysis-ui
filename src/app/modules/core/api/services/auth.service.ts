/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuthenticateRequest } from '../models/authenticate-request';
import { AuthenticateResponse } from '../models/authenticate-response';
import { BaseResponse } from '../models/base-response';
import { ChangePasswordRequest } from '../models/change-password-request';
import { RefreshTokenRequest } from '../models/refresh-token-request';
import { SetFirstPasswordRequest } from '../models/set-first-password-request';

@Injectable({
  providedIn: 'root',
})
export class AuthService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAuthAuthenticatePost
   */
  static readonly ApiAuthAuthenticatePostPath = '/api/Auth/authenticate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthAuthenticatePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthAuthenticatePost$Plain$Response(params?: {
    body?: AuthenticateRequest
  }): Observable<StrictHttpResponse<AuthenticateResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthAuthenticatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthAuthenticatePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthAuthenticatePost$Plain(params?: {
    body?: AuthenticateRequest
  }): Observable<AuthenticateResponse> {

    return this.apiAuthAuthenticatePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthenticateResponse>) => r.body as AuthenticateResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthAuthenticatePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthAuthenticatePost$Json$Response(params?: {
    body?: AuthenticateRequest
  }): Observable<StrictHttpResponse<AuthenticateResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthAuthenticatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthAuthenticatePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthAuthenticatePost$Json(params?: {
    body?: AuthenticateRequest
  }): Observable<AuthenticateResponse> {

    return this.apiAuthAuthenticatePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthenticateResponse>) => r.body as AuthenticateResponse)
    );
  }

  /**
   * Path part for operation apiAuthRefreshTokenPost
   */
  static readonly ApiAuthRefreshTokenPostPath = '/api/Auth/refreshToken';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRefreshTokenPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Plain$Response(params?: {
    body?: RefreshTokenRequest
  }): Observable<StrictHttpResponse<AuthenticateResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthRefreshTokenPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthRefreshTokenPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Plain(params?: {
    body?: RefreshTokenRequest
  }): Observable<AuthenticateResponse> {

    return this.apiAuthRefreshTokenPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuthenticateResponse>) => r.body as AuthenticateResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthRefreshTokenPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Json$Response(params?: {
    body?: RefreshTokenRequest
  }): Observable<StrictHttpResponse<AuthenticateResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthRefreshTokenPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuthenticateResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthRefreshTokenPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthRefreshTokenPost$Json(params?: {
    body?: RefreshTokenRequest
  }): Observable<AuthenticateResponse> {

    return this.apiAuthRefreshTokenPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuthenticateResponse>) => r.body as AuthenticateResponse)
    );
  }

  /**
   * Path part for operation apiAuthChangePasswordPost
   */
  static readonly ApiAuthChangePasswordPostPath = '/api/Auth/changePassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthChangePasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthChangePasswordPost$Plain$Response(params?: {
    body?: ChangePasswordRequest
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthChangePasswordPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthChangePasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthChangePasswordPost$Plain(params?: {
    body?: ChangePasswordRequest
  }): Observable<BaseResponse> {

    return this.apiAuthChangePasswordPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthChangePasswordPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthChangePasswordPost$Json$Response(params?: {
    body?: ChangePasswordRequest
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthChangePasswordPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthChangePasswordPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthChangePasswordPost$Json(params?: {
    body?: ChangePasswordRequest
  }): Observable<BaseResponse> {

    return this.apiAuthChangePasswordPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiAuthSetFirstPasswordPost
   */
  static readonly ApiAuthSetFirstPasswordPostPath = '/api/Auth/setFirstPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthSetFirstPasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthSetFirstPasswordPost$Plain$Response(params?: {
    body?: SetFirstPasswordRequest
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthSetFirstPasswordPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthSetFirstPasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthSetFirstPasswordPost$Plain(params?: {
    body?: SetFirstPasswordRequest
  }): Observable<BaseResponse> {

    return this.apiAuthSetFirstPasswordPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthSetFirstPasswordPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthSetFirstPasswordPost$Json$Response(params?: {
    body?: SetFirstPasswordRequest
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthSetFirstPasswordPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BaseResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthSetFirstPasswordPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuthSetFirstPasswordPost$Json(params?: {
    body?: SetFirstPasswordRequest
  }): Observable<BaseResponse> {

    return this.apiAuthSetFirstPasswordPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiAuthTestGet
   */
  static readonly ApiAuthTestGetPath = '/api/Auth/test';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuthTestGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthTestGet$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuthService.ApiAuthTestGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuthTestGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuthTestGet(params?: {
  }): Observable<void> {

    return this.apiAuthTestGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
