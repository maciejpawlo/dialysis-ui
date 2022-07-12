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
//TODO: add male - female radio button
  patientForm!: FormGroup;
  patient!: Patient;
  result!: any;

  ngOnInit(): void {
    this.patientForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      pesel: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      birthDate: ['', [Validators.required]]
    });
  }

  save(): void{
    console.log(this.patientForm);
    //TODO: Send request -> add patient
    if (this.patientForm.valid) {
      // let request: CreatePatientRequest = {
      //   birthDate: this.patientForm.get('birthDate')?.value,
      //   firstname: this.patientForm.get('firstName')?.value,
      //   lastname: this.patientForm.get('lastname')?.value,
      //   gender: 0,
      //   pesel: this.patientForm.get('pesel')?.value,
      //   userName: 'atest1'
      // };
      // this.userService.apiUserPatientsPost$Json({body: request})
      //   .subscribe(res => console.log(res));
    }
    console.log(this.result);
  }

}