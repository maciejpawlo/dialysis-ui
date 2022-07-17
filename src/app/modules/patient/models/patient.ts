import { Gender } from "../../core/api/models";

export interface Patient {
  PatientID: number;
  FirstName: string;
  LastName: string;
  PESEL: string;
  BirthDate: Date;
  Gender: Gender;
  CreatedAt: Date;
  UserID: string;
}
