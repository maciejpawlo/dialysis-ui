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

import { ExaminationDto } from '../models/examination-dto';

@Injectable({
  providedIn: 'root',
})
export class ExaminationsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiExaminationsGet
   */
  static readonly ApiExaminationsGetPath = '/api/Examinations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ExaminationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ExaminationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsGet$Plain(params?: {
  }): Observable<Array<ExaminationDto>> {

    return this.apiExaminationsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ExaminationDto>>) => r.body as Array<ExaminationDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<Array<ExaminationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ExaminationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsGet$Json(params?: {
  }): Observable<Array<ExaminationDto>> {

    return this.apiExaminationsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ExaminationDto>>) => r.body as Array<ExaminationDto>)
    );
  }

  /**
   * Path part for operation apiExaminationsPost
   */
  static readonly ApiExaminationsPostPath = '/api/Examinations';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExaminationsPost$Response(params?: {
    body?: ExaminationDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiExaminationsPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExaminationsPost(params?: {
    body?: ExaminationDto
  }): Observable<void> {

    return this.apiExaminationsPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiExaminationsIdGet
   */
  static readonly ApiExaminationsIdGetPath = '/api/Examinations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ExaminationDto>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExaminationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdGet$Plain(params: {
    id: number;
  }): Observable<ExaminationDto> {

    return this.apiExaminationsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ExaminationDto>) => r.body as ExaminationDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<ExaminationDto>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ExaminationDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdGet$Json(params: {
    id: number;
  }): Observable<ExaminationDto> {

    return this.apiExaminationsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ExaminationDto>) => r.body as ExaminationDto)
    );
  }

  /**
   * Path part for operation apiExaminationsIdPut
   */
  static readonly ApiExaminationsIdPutPath = '/api/Examinations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExaminationsIdPut$Response(params: {
    id: number;
    body?: ExaminationDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
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
   * To access the full response (for headers, for example), `apiExaminationsIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiExaminationsIdPut(params: {
    id: number;
    body?: ExaminationDto
  }): Observable<void> {

    return this.apiExaminationsIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiExaminationsIdDelete
   */
  static readonly ApiExaminationsIdDeletePath = '/api/Examinations/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiExaminationsIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiExaminationsIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiExaminationsExaminationByPatientIdGet
   */
  static readonly ApiExaminationsExaminationByPatientIdGetPath = '/api/Examinations/examinationByPatientId';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsExaminationByPatientIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsExaminationByPatientIdGet$Plain$Response(params?: {
    patientId?: number;
  }): Observable<StrictHttpResponse<Array<ExaminationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsExaminationByPatientIdGetPath, 'get');
    if (params) {
      rb.query('patientId', params.patientId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ExaminationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsExaminationByPatientIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsExaminationByPatientIdGet$Plain(params?: {
    patientId?: number;
  }): Observable<Array<ExaminationDto>> {

    return this.apiExaminationsExaminationByPatientIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ExaminationDto>>) => r.body as Array<ExaminationDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiExaminationsExaminationByPatientIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsExaminationByPatientIdGet$Json$Response(params?: {
    patientId?: number;
  }): Observable<StrictHttpResponse<Array<ExaminationDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ExaminationsService.ApiExaminationsExaminationByPatientIdGetPath, 'get');
    if (params) {
      rb.query('patientId', params.patientId, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ExaminationDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiExaminationsExaminationByPatientIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiExaminationsExaminationByPatientIdGet$Json(params?: {
    patientId?: number;
  }): Observable<Array<ExaminationDto>> {

    return this.apiExaminationsExaminationByPatientIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ExaminationDto>>) => r.body as Array<ExaminationDto>)
    );
  }

}
