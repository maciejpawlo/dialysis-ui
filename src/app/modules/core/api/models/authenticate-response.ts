/* tslint:disable */
/* eslint-disable */
export interface AuthenticateResponse {
  accessToken?: null | string;
  errors?: null | Array<string>;
  isSuccessful?: boolean;
  message?: null | string;
  refreshToken?: null | string;
  refreshTokenExpireDate?: string;
  statusCode?: number;
  userName?: null | string;
}
