import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {

  patients!: Patient[];
  displayedColumns: string[] = ['PatientID', 'FirstName', 'LastName', 'PESEL'];
  constructor(
    private router: Router
  ) { }

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

  navigateToPatientDetails(patient: Patient): void {
    console.log('navigating to patient details... ', patient);
    this.router.navigate(['/patients/:id', { id: patient.PatientID }])
  }

}
