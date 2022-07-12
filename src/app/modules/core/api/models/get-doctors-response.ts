/* tslint:disable */
/* eslint-disable */
import { DoctorDto } from './doctor-dto';
export interface GetDoctorsResponse {
  doctors?: null | Array<DoctorDto>;
  errors?: null | Array<string>;
  isSuccessful?: boolean;
  message?: null | string;
  statusCode?: number;
}
