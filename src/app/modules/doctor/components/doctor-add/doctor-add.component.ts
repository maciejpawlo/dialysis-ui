import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateDoctorRequest } from 'src/app/modules/core/api/models';
import { UserService } from 'src/app/modules/core/api/services';
import { InfoDialogComponent } from 'src/app/modules/core/dialogs/info-dialog/info-dialog.component';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog
  ) { }

    doctorForm!: FormGroup;

  ngOnInit(): void {
    this.doctorForm = this.fb.group({
      userName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      permissionNumber: ['', [Validators.required]]
    });
  }

  save(): void {
    if(this.doctorForm.valid) {
      const request: CreateDoctorRequest = {
        firstname: this.doctorForm.get('firstName')?.value,
        lastname: this.doctorForm.get('lastName')?.value,
        permissionNumber: this.doctorForm.get('permissionNumber')?.value,
        userName: this.doctorForm.get('userName')?.value
      };
      this.userService.apiUserDoctorsPost$Json({body: request})
        .subscribe({
          next: data=>{
            const infoDialogRef = this.dialog.open(InfoDialogComponent, {
              width: '400px',
              data: {title: 'Doctor Created', message: `<b>Username</b>: ${data.userName}` + '</br>'+ `<b>Password</b>: ${data.password}`}
            });
            infoDialogRef.afterClosed().subscribe(()=>{
              this.router.navigate(['/doctors/doctorsList']);
            });
          }
        });
    }
  }
}
