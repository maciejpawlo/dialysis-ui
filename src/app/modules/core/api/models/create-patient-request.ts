/* tslint:disable */
/* eslint-disable */
import { Gender } from './gender';
export interface CreatePatientRequest {
  birthDate?: string;
  firstname?: null | string;
  gender?: Gender;
  lastname?: null | string;
  pesel?: null | string;
  userName?: null | string;
}
