/* tslint:disable */
/* eslint-disable */
export interface ExaminationDto {
  createdAt?: string;
  examinationID?: number;
  imageURL?: null | string;
  patientID: number;
  turbidityFAU: number;
  turbidityNTU: number;
  diastolicPressure: number;
  systolicPressure: number;
  weight: number;
}
