/* tslint:disable */
/* eslint-disable */
import { PatientDto } from './patient-dto';
export interface GetPatientsResponse {
  errors?: null | Array<string>;
  isSuccessful?: boolean;
  message?: null | string;
  patients?: null | Array<PatientDto>;
  statusCode?: number;
}
