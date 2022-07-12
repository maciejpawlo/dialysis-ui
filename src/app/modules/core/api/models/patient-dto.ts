/* tslint:disable */
/* eslint-disable */
import { Gender } from './gender';
export interface PatientDto {
  birthDate?: string;
  firstName: string;
  gender: Gender;
  lastName: string;
  patientID?: number;
  pesel: string;
}
