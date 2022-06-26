import { Component, OnInit } from '@angular/core';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients!: Patient[];
  displayedColumns: string[] = ['PatientID', 'FirstName', 'LastName', 'PESEL'];
  constructor() { }

  ngOnInit(): void {
    this.patients =
    [
      {
        "PatientID": 1,
        "FirstName": "Pacjent",
        "LastName": "Testowy",
        "PESEL": "75010595778",
        "BirthDate": new Date('2019-01-16'),
        "CreatedAt": new Date('2019-01-16'),
        "UserID": 'sadsadasd'
      },
      {
        "PatientID": 2,
        "FirstName": "Pacjent",
        "LastName": "Testowy",
        "PESEL": "75010595778",
        "BirthDate": new Date('2019-01-16'),
        "CreatedAt": new Date('2019-01-16'),
        "UserID": 'sadsadasd'
      },
      {
        "PatientID": 3,
        "FirstName": "Pacjent",
        "LastName": "Testowy",
        "PESEL": "75010595778",
        "BirthDate": new Date('2019-01-16'),
        "CreatedAt": new Date('2019-01-16'),
        "UserID": 'sadsadasd'
      },
    ]
  }

}
