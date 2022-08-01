import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { DoctorDto } from 'src/app/modules/core/api/models';
import { UserService } from 'src/app/modules/core/api/services';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/modules/core/dialogs/confirm-dialog/confirm-dialog.component';
import { TokenService } from 'src/app/modules/core/services/token.service';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css']
})
export class DoctorListComponent implements OnInit, AfterViewInit {

  doctors!: DoctorDto[];
  dataSource!: MatTableDataSource<DoctorDto>;
  displayedColumns: string[] = ['DoctorID', 'FirstName', 'LastName', 'PermissionNumber', 'Actions'];
  role!: string | null;
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor(
    private router: Router,
    private userService: UserService,
    private tokenService: TokenService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<DoctorDto>();
    this.role = this.tokenService.getUserRole();

    this.refreshTable();
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  handleMenu(event: any){
    event.stopPropagation();
    event.preventDefault();
  }

  refreshTable(): void {
    this.userService.apiUserDoctorsGet$Json()
      .subscribe({
        next: data => {
          this.dataSource.data = data.doctors!;
        }
      });
  }

  editDoctor(doctor: DoctorDto): void{
    console.log('edit')
  }

  deleteDoctor(doctor: DoctorDto): void{
    const dialogData = new ConfirmDialogModel('Delete doctor', 'Are you sure you want to delete doctor?')

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.userService.apiUserDoctorsIdDelete$Json({id: doctor.doctorID!})
          .subscribe({
            next: ()=>{
              this.refreshTable();
            }
          });
      }
    })
  }

}
