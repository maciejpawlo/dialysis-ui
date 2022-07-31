import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { PatientDto } from 'src/app/modules/core/api/models';
import { UserService } from 'src/app/modules/core/api/services';
import { TokenService } from 'src/app/modules/core/services/token.service';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit, AfterViewInit {

  patients!: PatientDto[];
  dataSource!: MatTableDataSource<PatientDto>;
  displayedColumns: string[] = ['PatientID', 'FirstName', 'LastName', 'PESEL'];
  role!: string | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService
  ) { }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource<PatientDto>();

      let queryParams = {};
      this.role = this.tokenService.getUserRole();

      if(this.role === 'Doctor'){
        this.userService.apiUserUserInfoGet$Json()
          .subscribe({
            next: data => {
              queryParams = {doctorID: data.internalUserID}
            }
          });
      }

      this.userService.apiUserPatientsGet$Json(queryParams)
        .subscribe({
          next: data => {
            this.dataSource.data = data.patients!
          }
        });
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  navigateToPatientDetails(patient: PatientDto): void {
    this.router.navigate(['/patients', patient.patientID])
  }

  navigateToPatientAdd(): void {
    this.router.navigate(['/patients/add'])
  }

}
