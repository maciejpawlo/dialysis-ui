import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreatePatientRequest, DoctorDto } from 'src/app/modules/core/api/models';
import { UserService } from 'src/app/modules/core/api/services';
import { InfoDialogComponent } from 'src/app/modules/core/dialogs/info-dialog/info-dialog.component';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-add',
  templateUrl: './patient-add.component.html',
  styleUrls: ['./patient-add.component.css']
})
export class PatientAddComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService,
    private dialog: MatDialog
    ) { }

  patientForm!: FormGroup;
  patient!: Patient;
  doctors!:DoctorDto;

  ngOnInit(): void {
    // this.userService.apiUserDoctorsGet$Json().subscribe({
    //   next: data=>{
    //     console.log(data.doctors);
    //   }
    // });

    this.patientForm = this.fb.group({
      userName: ['', [Validators.required]],
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      pesel: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      birthDate: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });
  }

  save(): void{
    if (this.patientForm.valid) {
      let request: CreatePatientRequest = {
        birthDate: this.patientForm.get('birthDate')?.value,
        firstname: this.patientForm.get('firstName')?.value,
        lastname: this.patientForm.get('lastName')?.value,
        gender: this.patientForm.get('gender')?.value,
        pesel: this.patientForm.get('pesel')?.value,
        userName: this.patientForm.get('userName')?.value
      };
      this.userService.apiUserPatientsPost$Json({body: request})
        .subscribe({
          next: data=>{
            const infoDialogRef = this.dialog.open(InfoDialogComponent, {
              width: '400px',
              data: {title: 'Patient Created', message: `<b>Username</b>: ${data.userName}` + '</br>'+ `<b>Password</b>: ${data.password}`}
            });
            infoDialogRef.afterClosed().subscribe(()=>{
              this.router.navigate(['/patients/patientsList']);
            });
          }
        });
    }
  }

}
