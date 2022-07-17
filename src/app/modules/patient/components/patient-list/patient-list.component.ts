import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit, AfterViewInit {

  patients!: Patient[];
  dataSource!: MatTableDataSource<Patient>;
  displayedColumns: string[] = ['PatientID', 'FirstName', 'LastName', 'PESEL'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

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
        "UserID": 'sadsadasd',
        Gender: 0
      },
      {
        "PatientID": 2,
        "FirstName": "Pacjent",
        "LastName": "Testowy",
        "PESEL": "75010595778",
        "BirthDate": new Date('2019-01-16'),
        "CreatedAt": new Date('2019-01-16'),
        "UserID": 'sadsadasd',
        Gender: 0
      },
      {
        "PatientID": 3,
        "FirstName": "Pacjent",
        "LastName": "Testowy",
        "PESEL": "75010595778",
        "BirthDate": new Date('2019-01-16'),
        "CreatedAt": new Date('2019-01-16'),
        "UserID": 'sadsadasd',
        Gender: 0
      },
    ]
    this.dataSource = new MatTableDataSource<Patient>(this.patients);
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  navigateToPatientDetails(patient: Patient): void {
    console.log('navigating to patient details... ', patient);
    this.router.navigate(['/patients', patient.PatientID])
  }

  navigateToPatientAdd(): void {
    this.router.navigate(['/patients/add'])
  }

}
