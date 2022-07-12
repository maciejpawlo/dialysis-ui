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

import { AssignPatientToDoctorRequest } from '../models/assign-patient-to-doctor-request';
import { BaseResponse } from '../models/base-response';
import { CreateDoctorRequest } from '../models/create-doctor-request';
import { CreatePatientRequest } from '../models/create-patient-request';
import { CreateUserResponse } from '../models/create-user-response';
import { DoctorDto } from '../models/doctor-dto';
import { GetDoctorsResponse } from '../models/get-doctors-response';
import { GetPatientsResponse } from '../models/get-patients-response';
import { GetUserInfoResponse } from '../models/get-user-info-response';
import { PatientDto } from '../models/patient-dto';
import { ResetUsersPasswordRequest } from '../models/reset-users-password-request';

@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiUserDoctorsGet
   */
  static readonly ApiUserDoctorsGetPath = '/api/User/doctors';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsGet$Plain$Response(params?: {
    firstName?: string;
    lastName?: string;
    permissionNumber?: string;
    includePatients?: boolean;
  }): Observable<StrictHttpResponse<GetDoctorsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorsGetPath, 'get');
    if (params) {
      rb.query('firstName', params.firstName, {});
      rb.query('lastName', params.lastName, {});
      rb.query('permissionNumber', params.permissionNumber, {});
      rb.query('includePatients', params.includePatients, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetDoctorsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserDoctorsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsGet$Plain(params?: {
    firstName?: string;
    lastName?: string;
    permissionNumber?: string;
    includePatients?: boolean;
  }): Observable<GetDoctorsResponse> {

    return this.apiUserDoctorsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetDoctorsResponse>) => r.body as GetDoctorsResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsGet$Json$Response(params?: {
    firstName?: string;
    lastName?: string;
    permissionNumber?: string;
    includePatients?: boolean;
  }): Observable<StrictHttpResponse<GetDoctorsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorsGetPath, 'get');
    if (params) {
      rb.query('firstName', params.firstName, {});
      rb.query('lastName', params.lastName, {});
      rb.query('permissionNumber', params.permissionNumber, {});
      rb.query('includePatients', params.includePatients, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetDoctorsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserDoctorsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsGet$Json(params?: {
    firstName?: string;
    lastName?: string;
    permissionNumber?: string;
    includePatients?: boolean;
  }): Observable<GetDoctorsResponse> {

    return this.apiUserDoctorsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetDoctorsResponse>) => r.body as GetDoctorsResponse)
    );
  }

  /**
   * Path part for operation apiUserDoctorsPost
   */
  static readonly ApiUserDoctorsPostPath = '/api/User/doctors';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserDoctorsPost$Plain$Response(params?: {
    body?: CreateDoctorRequest
  }): Observable<StrictHttpResponse<CreateUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreateUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserDoctorsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserDoctorsPost$Plain(params?: {
    body?: CreateDoctorRequest
  }): Observable<CreateUserResponse> {

    return this.apiUserDoctorsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CreateUserResponse>) => r.body as CreateUserResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserDoctorsPost$Json$Response(params?: {
    body?: CreateDoctorRequest
  }): Observable<StrictHttpResponse<CreateUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreateUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserDoctorsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserDoctorsPost$Json(params?: {
    body?: CreateDoctorRequest
  }): Observable<CreateUserResponse> {

    return this.apiUserDoctorsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CreateUserResponse>) => r.body as CreateUserResponse)
    );
  }

  /**
   * Path part for operation apiUserPatientsGet
   */
  static readonly ApiUserPatientsGetPath = '/api/User/patients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatientsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsGet$Plain$Response(params?: {
    firstName?: string;
    lastName?: string;
    pesel?: string;
    gender?: string;
    doctorID?: number;
    includeDoctors?: boolean;
  }): Observable<StrictHttpResponse<GetPatientsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPatientsGetPath, 'get');
    if (params) {
      rb.query('firstName', params.firstName, {});
      rb.query('lastName', params.lastName, {});
      rb.query('pesel', params.pesel, {});
      rb.query('gender', params.gender, {});
      rb.query('doctorID', params.doctorID, {});
      rb.query('includeDoctors', params.includeDoctors, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetPatientsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserPatientsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsGet$Plain(params?: {
    firstName?: string;
    lastName?: string;
    pesel?: string;
    gender?: string;
    doctorID?: number;
    includeDoctors?: boolean;
  }): Observable<GetPatientsResponse> {

    return this.apiUserPatientsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetPatientsResponse>) => r.body as GetPatientsResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatientsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsGet$Json$Response(params?: {
    firstName?: string;
    lastName?: string;
    pesel?: string;
    gender?: string;
    doctorID?: number;
    includeDoctors?: boolean;
  }): Observable<StrictHttpResponse<GetPatientsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPatientsGetPath, 'get');
    if (params) {
      rb.query('firstName', params.firstName, {});
      rb.query('lastName', params.lastName, {});
      rb.query('pesel', params.pesel, {});
      rb.query('gender', params.gender, {});
      rb.query('doctorID', params.doctorID, {});
      rb.query('includeDoctors', params.includeDoctors, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetPatientsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserPatientsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsGet$Json(params?: {
    firstName?: string;
    lastName?: string;
    pesel?: string;
    gender?: string;
    doctorID?: number;
    includeDoctors?: boolean;
  }): Observable<GetPatientsResponse> {

    return this.apiUserPatientsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetPatientsResponse>) => r.body as GetPatientsResponse)
    );
  }

  /**
   * Path part for operation apiUserPatientsPost
   */
  static readonly ApiUserPatientsPostPath = '/api/User/patients';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatientsPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatientsPost$Plain$Response(params?: {
    body?: CreatePatientRequest
  }): Observable<StrictHttpResponse<CreateUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPatientsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreateUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserPatientsPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatientsPost$Plain(params?: {
    body?: CreatePatientRequest
  }): Observable<CreateUserResponse> {

    return this.apiUserPatientsPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CreateUserResponse>) => r.body as CreateUserResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatientsPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatientsPost$Json$Response(params?: {
    body?: CreatePatientRequest
  }): Observable<StrictHttpResponse<CreateUserResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPatientsPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CreateUserResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserPatientsPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatientsPost$Json(params?: {
    body?: CreatePatientRequest
  }): Observable<CreateUserResponse> {

    return this.apiUserPatientsPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CreateUserResponse>) => r.body as CreateUserResponse)
    );
  }

  /**
   * Path part for operation apiUserAssignPatientToDoctorPost
   */
  static readonly ApiUserAssignPatientToDoctorPostPath = '/api/User/assignPatientToDoctor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAssignPatientToDoctorPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAssignPatientToDoctorPost$Plain$Response(params?: {
    body?: AssignPatientToDoctorRequest
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAssignPatientToDoctorPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserAssignPatientToDoctorPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAssignPatientToDoctorPost$Plain(params?: {
    body?: AssignPatientToDoctorRequest
  }): Observable<BaseResponse> {

    return this.apiUserAssignPatientToDoctorPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserAssignPatientToDoctorPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAssignPatientToDoctorPost$Json$Response(params?: {
    body?: AssignPatientToDoctorRequest
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserAssignPatientToDoctorPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserAssignPatientToDoctorPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserAssignPatientToDoctorPost$Json(params?: {
    body?: AssignPatientToDoctorRequest
  }): Observable<BaseResponse> {

    return this.apiUserAssignPatientToDoctorPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiUserUnassignPatientFromDoctorPost
   */
  static readonly ApiUserUnassignPatientFromDoctorPostPath = '/api/User/unassignPatientFromDoctor';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUnassignPatientFromDoctorPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUnassignPatientFromDoctorPost$Plain$Response(params?: {
    body?: AssignPatientToDoctorRequest
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUnassignPatientFromDoctorPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserUnassignPatientFromDoctorPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUnassignPatientFromDoctorPost$Plain(params?: {
    body?: AssignPatientToDoctorRequest
  }): Observable<BaseResponse> {

    return this.apiUserUnassignPatientFromDoctorPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUnassignPatientFromDoctorPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUnassignPatientFromDoctorPost$Json$Response(params?: {
    body?: AssignPatientToDoctorRequest
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUnassignPatientFromDoctorPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserUnassignPatientFromDoctorPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserUnassignPatientFromDoctorPost$Json(params?: {
    body?: AssignPatientToDoctorRequest
  }): Observable<BaseResponse> {

    return this.apiUserUnassignPatientFromDoctorPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiUserDoctorsIdGet
   */
  static readonly ApiUserDoctorsIdGetPath = '/api/User/doctors/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<GetDoctorsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetDoctorsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserDoctorsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsIdGet$Plain(params: {
    id: number;
  }): Observable<GetDoctorsResponse> {

    return this.apiUserDoctorsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetDoctorsResponse>) => r.body as GetDoctorsResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<GetDoctorsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetDoctorsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserDoctorsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsIdGet$Json(params: {
    id: number;
  }): Observable<GetDoctorsResponse> {

    return this.apiUserDoctorsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetDoctorsResponse>) => r.body as GetDoctorsResponse)
    );
  }

  /**
   * Path part for operation apiUserDoctorsIdPut
   */
  static readonly ApiUserDoctorsIdPutPath = '/api/User/doctors/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorsIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserDoctorsIdPut$Plain$Response(params: {
    id: number;
    body?: DoctorDto
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiUserDoctorsIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserDoctorsIdPut$Plain(params: {
    id: number;
    body?: DoctorDto
  }): Observable<BaseResponse> {

    return this.apiUserDoctorsIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorsIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserDoctorsIdPut$Json$Response(params: {
    id: number;
    body?: DoctorDto
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiUserDoctorsIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserDoctorsIdPut$Json(params: {
    id: number;
    body?: DoctorDto
  }): Observable<BaseResponse> {

    return this.apiUserDoctorsIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiUserDoctorsIdDelete
   */
  static readonly ApiUserDoctorsIdDeletePath = '/api/User/doctors/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiUserDoctorsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsIdDelete$Plain(params: {
    id: number;
  }): Observable<BaseResponse> {

    return this.apiUserDoctorsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserDoctorsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserDoctorsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiUserDoctorsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserDoctorsIdDelete$Json(params: {
    id: number;
  }): Observable<BaseResponse> {

    return this.apiUserDoctorsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiUserPatientsIdGet
   */
  static readonly ApiUserPatientsIdGetPath = '/api/User/patients/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatientsIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<GetPatientsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPatientsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetPatientsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserPatientsIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsIdGet$Plain(params: {
    id: number;
  }): Observable<GetPatientsResponse> {

    return this.apiUserPatientsIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetPatientsResponse>) => r.body as GetPatientsResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatientsIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<GetPatientsResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPatientsIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetPatientsResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserPatientsIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsIdGet$Json(params: {
    id: number;
  }): Observable<GetPatientsResponse> {

    return this.apiUserPatientsIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetPatientsResponse>) => r.body as GetPatientsResponse)
    );
  }

  /**
   * Path part for operation apiUserPatientsIdPut
   */
  static readonly ApiUserPatientsIdPutPath = '/api/User/patients/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatientsIdPut$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatientsIdPut$Plain$Response(params: {
    id: number;
    body?: PatientDto
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPatientsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiUserPatientsIdPut$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatientsIdPut$Plain(params: {
    id: number;
    body?: PatientDto
  }): Observable<BaseResponse> {

    return this.apiUserPatientsIdPut$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatientsIdPut$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatientsIdPut$Json$Response(params: {
    id: number;
    body?: PatientDto
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPatientsIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiUserPatientsIdPut$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserPatientsIdPut$Json(params: {
    id: number;
    body?: PatientDto
  }): Observable<BaseResponse> {

    return this.apiUserPatientsIdPut$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiUserPatientsIdDelete
   */
  static readonly ApiUserPatientsIdDeletePath = '/api/User/patients/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatientsIdDelete$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsIdDelete$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPatientsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiUserPatientsIdDelete$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsIdDelete$Plain(params: {
    id: number;
  }): Observable<BaseResponse> {

    return this.apiUserPatientsIdDelete$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserPatientsIdDelete$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsIdDelete$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserPatientsIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
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
   * To access the full response (for headers, for example), `apiUserPatientsIdDelete$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserPatientsIdDelete$Json(params: {
    id: number;
  }): Observable<BaseResponse> {

    return this.apiUserPatientsIdDelete$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiUserResetUsersPasswordPost
   */
  static readonly ApiUserResetUsersPasswordPostPath = '/api/User/resetUsersPassword';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResetUsersPasswordPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserResetUsersPasswordPost$Plain$Response(params?: {
    body?: ResetUsersPasswordRequest
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserResetUsersPasswordPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserResetUsersPasswordPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserResetUsersPasswordPost$Plain(params?: {
    body?: ResetUsersPasswordRequest
  }): Observable<BaseResponse> {

    return this.apiUserResetUsersPasswordPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserResetUsersPasswordPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserResetUsersPasswordPost$Json$Response(params?: {
    body?: ResetUsersPasswordRequest
  }): Observable<StrictHttpResponse<BaseResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserResetUsersPasswordPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiUserResetUsersPasswordPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiUserResetUsersPasswordPost$Json(params?: {
    body?: ResetUsersPasswordRequest
  }): Observable<BaseResponse> {

    return this.apiUserResetUsersPasswordPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BaseResponse>) => r.body as BaseResponse)
    );
  }

  /**
   * Path part for operation apiUserUserInfoGet
   */
  static readonly ApiUserUserInfoGetPath = '/api/User/UserInfo';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUserInfoGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserInfoGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<GetUserInfoResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUserInfoGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetUserInfoResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserUserInfoGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserInfoGet$Plain(params?: {
  }): Observable<GetUserInfoResponse> {

    return this.apiUserUserInfoGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetUserInfoResponse>) => r.body as GetUserInfoResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiUserUserInfoGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserInfoGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<GetUserInfoResponse>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.ApiUserUserInfoGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetUserInfoResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiUserUserInfoGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiUserUserInfoGet$Json(params?: {
  }): Observable<GetUserInfoResponse> {

    return this.apiUserUserInfoGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetUserInfoResponse>) => r.body as GetUserInfoResponse)
    );
  }

}
