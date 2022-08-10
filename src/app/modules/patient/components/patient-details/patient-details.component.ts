import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { LegendPosition } from '@swimlane/ngx-charts';
import { map, Observable } from 'rxjs';
import { AssignPatientToDoctorRequest, DoctorDto, ExaminationDto, PatientDto } from 'src/app/modules/core/api/models';
import { ExaminationsService, UserService } from 'src/app/modules/core/api/services';
import { ConfirmDialogComponent, ConfirmDialogModel } from 'src/app/modules/core/dialogs/confirm-dialog/confirm-dialog.component';
import { InfoDialogComponent } from 'src/app/modules/core/dialogs/info-dialog/info-dialog.component';
import { TokenService } from 'src/app/modules/core/services/token.service';
import { Examination } from 'src/app/modules/examination/models/examination';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit, AfterViewInit {

  patient: Patient = {
    PatientID: 0,
    PESEL: '',
    BirthDate: new Date(),
    CreatedAt: new Date(),
    Gender: 0,
    FirstName: '',
    LastName: '',
    UserID: ''
  };
  //examination table data
  examinations!: ExaminationDto[]
  displayedColumns: string[] = ['ExaminationID', 'Weight', 'TurbidityNTU', 'TurbidityFAU', 'CreatedAt'];
  dataSource!: MatTableDataSource<ExaminationDto>;

  //assigned doctors table data
  assignedDoctors!: DoctorDto[];
  assignedDoctorsDataSource!: MatTableDataSource<DoctorDto>;
  assignedDoctorsDisplayedColumns!: string[];

  //chart options
  showLabels: boolean = true;
  animations: boolean = true;
  xAxis: boolean = true;
  yAxis: boolean = true;
  showYAxisLabel: boolean = true;
  showXAxisLabel: boolean = true;
  xAxisLabel: string = 'Date';
  yAxisLabel: string = 'Turbidity';
  timeline: boolean = true;
  chartData: any[] = [];
  legend: boolean = true;
  legendPosition: LegendPosition = LegendPosition.Below;

  role!:string | null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private examinationsService: ExaminationsService,
    private tokenService: TokenService,
    private dialog: MatDialog
    ) { }

  ngOnInit(): void {
    const patientID = this.route.snapshot.paramMap.get('id');
    this.role = this.tokenService.getUserRole();

    if(this.role?.toLowerCase() === 'administrator') {
      this.assignedDoctorsDisplayedColumns = ['DoctorID', 'FirstName', 'LastName', 'PermissionNumber', 'Actions'];
    } else {
      this.assignedDoctorsDisplayedColumns = ['DoctorID', 'FirstName', 'LastName', 'PermissionNumber'];
    }

    this.userService.apiUserPatientsIdGet$Json({id: Number(patientID)})
      .pipe(map(data => {
        return data.patients![0];
      }))
      .subscribe({next: data => {
        this.patient = {
          PatientID: data.patientID!,
          PESEL: data.pesel,
          BirthDate: new Date(data.birthDate!),
          CreatedAt: new Date(),
          Gender: data.gender,
          FirstName: data.firstName,
          LastName: data.lastName,
          UserID: ''
        };
    }});

    this.dataSource = new MatTableDataSource<ExaminationDto>()

    this.examinationsService.apiExaminationsExaminationByPatientIdGet$Json({patientId: Number(patientID)})
      .subscribe({
        next: data => {
          this.examinations = data;
          this.dataSource.data = data;
          this.chartData = this.generateExaminationChartData(data);
        }
      });

    this.assignedDoctorsDataSource = new MatTableDataSource<DoctorDto>()

    this.refreshDoctorTable(Number(patientID));
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  navigateToExaminationDetails(examination: ExaminationDto): void {
    this.router.navigate(['/examinations', examination.examinationID])
  }

  navigateToPatientEdit(): void {
    this.router.navigate(['/patients', this.patient.PatientID, 'edit'])
  }

  navigateToPatientList(): void {
    this.router.navigate(['/patients/patientsList'])
  }

  delete(): void {
    const dialogData = new ConfirmDialogModel('Delete patient', 'Are you sure you want to delete patient?')

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        this.userService.apiUserPatientsIdDelete$Json({id: this.patient.PatientID})
          .subscribe({
            next: ()=>{
              this.router.navigate(['/patients/patientsList'])
            }
          });
      }
    })
  }

  generateExaminationChartData(examinations: ExaminationDto[]) {
    let chartData: any[] = [
      {
        "name": `Turbidity NTU`,
        "series": [],
      },
      {
        "name": `Turbidity FAU`,
        "series": [],
      }
    ];

    examinations.forEach(item => {
      const chartItemNTU = {
        "name": new Date(item.createdAt!).toLocaleString('en-US'), //x
        "value": item.turbidityNTU //y
      }
      chartData[0].series.push(chartItemNTU);
      const chartItemFAU = {
        "name": new Date(item.createdAt!).toLocaleString('en-US'), //x
        "value": item.turbidityFAU //y
      }
      chartData[1].series.push(chartItemFAU);
    });

    return chartData;
  }

  handleDoctorMenu(event: any){
    event.stopPropagation();
    event.preventDefault();
  }

  refreshDoctorTable(patientID: number): void {
    this.userService.apiUserDoctorsGet$Json({patientID: patientID})
      .subscribe({
        next: data => {
          this.assignedDoctorsDataSource.data = data.doctors!;
        }
      });
  }

  deletePatientDoctorAssignment(doctor: DoctorDto): void {
    const dialogData = new ConfirmDialogModel('Delete doctor-patient assignment', 'Are you sure you want to delete doctor-patient assignment?')

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '400px',
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(result=>{
      if(result){
        console.log('delete pt-doc', doctor.doctorID!);
        const request: AssignPatientToDoctorRequest = {
          patientID: this.patient.PatientID,
          doctorID: doctor.doctorID!
        };

        this.userService.apiUserUnassignPatientFromDoctorPost$Json({body: request})
          .subscribe({
            next: data => {
              this.refreshDoctorTable(this.patient.PatientID);
            }
          });
      }
    })
  }
}
