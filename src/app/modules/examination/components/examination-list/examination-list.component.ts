import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { Examination } from '../../models/examination';

@Component({
  selector: 'app-examination-list',
  templateUrl: './examination-list.component.html',
  styleUrls: ['./examination-list.component.css']
})
export class ExaminationListComponent implements OnInit {

  examinations!: Examination[];
  displayedColumns: string[] = ['ExaminationID', 'Weight', 'Turbidity', 'CreatedAt', 'PatientID'];
  dataSource!: MatTableDataSource<Examination>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.examinations = [
      {
        ExaminationID: 1,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: 1
      },
      {
        ExaminationID: 2,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: 2
      },
      {
        ExaminationID: 3,
        Weight: 25,
        Turbidity: 10,
        ImageURL: 'https://www.highsnobiety.com/static-assets/thumbor/i19CiOdg1nWNFF9C1VtqXhGdalE=/1600x1067/www.highsnobiety.com/static-assets/wp-content/uploads/2016/08/17122514/supreme-brick-1.jpg',
        CreatedAt: new Date('2019-01-16'),
        PatientID: 3
      }
    ]
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
