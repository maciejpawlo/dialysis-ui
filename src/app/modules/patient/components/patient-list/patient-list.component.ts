import { CollectionViewer, DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatMenuTrigger } from '@angular/material/menu';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { PatientDto } from 'src/app/modules/core/api/models';
import { UserService } from 'src/app/modules/core/api/services';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/modules/core/dialogs/confirm-dialog/confirm-dialog.component';
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
  displayedColumns: string[] = ['PatientID', 'FirstName', 'LastName', 'Actions'];
  role!: string | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  //@ViewChild(MatMenuTrigger) trigger!: MatMenuTrigger;


  constructor(
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
      this.dataSource = new MatTableDataSource<PatientDto>();
      this.refreshTable();
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

  handleMenu(event: any){
    event.stopPropagation();
    event.preventDefault();
  }

  editPatient(patient: PatientDto): void{
    this.router.navigate(['/patients', patient.patientID, 'edit'])
  }

  deletePatient(patient: PatientDto): void{
    const dialogData = new ConfirmDialogModel('Delete patient', 'Are you sure you want to delete patient?')

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.userService.apiUserPatientsIdDelete$Json({id: patient.patientID!})
          .subscribe({
            next: ()=>{
              this.refreshTable();
            }
          });
      }
    })
  }

  refreshTable(): void {
    let queryParams = {};
      this.role = this.tokenService.getUserRole();

      if(this.role === 'Doctor'){
        this.userService.apiUserUserInfoGet$Json()
          .subscribe({
            next: data => {
              queryParams = {doctorID: data.internalUserID}

              this.userService.apiUserPatientsGet$Json(queryParams)
              .subscribe({
                next: data => {
                    this.dataSource.data = data.patients!
                }
              });
            }
          });
          return;
      }

      this.userService.apiUserPatientsGet$Json(queryParams)
        .subscribe({
          next: data => {
            this.dataSource.data = data.patients!
          }
        });
  }
}
