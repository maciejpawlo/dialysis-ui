import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CreatePatientRequest } from 'src/app/modules/core/api/models';
import { UserService } from 'src/app/modules/core/api/services';
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
    private userService: UserService
    ) { }

  patientForm!: FormGroup;
  patient!: Patient;

  ngOnInit(): void {
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
            console.log(data)
          }
        });
    }
    //TODO: display dialog with result
    this.router.navigate(['/patients/patientsList']);
  }

}
