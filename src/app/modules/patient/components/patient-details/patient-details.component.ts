import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Examination } from 'src/app/modules/examination/models/examination';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-details',
  templateUrl: './patient-details.component.html',
  styleUrls: ['./patient-details.component.css']
})
export class PatientDetailsComponent implements OnInit, AfterViewInit {

  patient!: Patient;
  //examination table data
  examinations!: Examination[]
  displayedColumns: string[] = ['ExaminationID', 'Weight', 'Turbidity', 'CreatedAt', 'PatientID'];
  dataSource!: MatTableDataSource<Examination>;

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
  data: any[] = [
    {
      "name": "Pacjent Testowy",
      "series": [
        {
          "name": new Date('2019-01-14').toDateString(),
          "value": 25
        },
        {
          "name": new Date('2019-01-15').toDateString(),
          "value": 40
        },
        {
          "name": new Date('2019-01-16').toDateString(),
          "value": 50
        }
      ]
    },
  ];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const patientID = this.route.snapshot.paramMap.get('id');
    //TODO: get patient by id
    //get examinations by patient id
    this.patient = {
      "PatientID": Number(patientID),
      "FirstName": "Pacjent",
      "LastName": "Testowy",
      "PESEL": "75010595778",
      "BirthDate": new Date('2019-01-16'),
      "CreatedAt": new Date('2019-01-16'),
      "UserID": 'sadsadasd'
    };

    this.examinations = [
      {
        ExaminationID: 1,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: Number(patientID)
      },
      {
        ExaminationID: 2,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: Number(patientID)
      },
      {
        ExaminationID: 3,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: Number(patientID)
      },
      {
        ExaminationID: 4,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: Number(patientID)
      },
      {
        ExaminationID: 5,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: Number(patientID)
      },
      {
        ExaminationID: 6,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: Number(patientID)
      },
      {
        ExaminationID: 7,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: Number(patientID)
      },
      {
        ExaminationID: 8,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: Number(patientID)
      }
    ];

    this.dataSource = new MatTableDataSource<Examination>(this.examinations)
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
  }

  navigateToExaminationDetails(examination: Examination): void {
    console.log('navigating to examination details... ', examination);
    this.router.navigate(['/examinations', examination.ExaminationID])
  }
}
