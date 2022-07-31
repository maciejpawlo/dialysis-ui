import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { ExaminationDto, PatientDto } from 'src/app/modules/core/api/models';
import { ExaminationsService, UserService } from 'src/app/modules/core/api/services';
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
  displayedColumns: string[] = ['ExaminationID', 'Weight', 'Turbidity', 'CreatedAt', 'PatientID'];
  dataSource!: MatTableDataSource<ExaminationDto>;

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

  role!:string | null;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private userService: UserService,
    private examinationsService: ExaminationsService,
    private tokenService: TokenService
    ) { }

  ngOnInit(): void {
    const patientID = this.route.snapshot.paramMap.get('id');

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

    this.role = this.tokenService.getUserRole();
    console.log(this.role)
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

  delete(): void {

  }

  generateExaminationChartData(examinations: ExaminationDto[]) {
    let chartData: any[] = [
      {
        "name": `Examination`,
        "series": []
      }
    ];

    examinations.forEach(item => {
      const chartItem = {
        "name": new Date(item.createdAt!).toLocaleString('en-US'),
        "value": item.turbidity
      }
      chartData[0].series.push(chartItem);
    });

    return chartData;
  }
}
