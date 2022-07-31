import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { PatientDto } from 'src/app/modules/core/api/models';
import { Gender } from 'src/app/modules/core/api/models/gender';
import { UserService } from 'src/app/modules/core/api/services';
import { Patient } from '../../models/patient';

@Component({
  selector: 'app-patient-edit',
  templateUrl: './patient-edit.component.html',
  styleUrls: ['./patient-edit.component.css']
})
export class PatientEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
    ) { }

  patientForm!: FormGroup;

  patient!: Patient;

  ngOnInit(): void {
    const patientID = this.route.snapshot.paramMap.get('id');

    this.patientForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      pesel: ['', [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      birthDate: ['', [Validators.required]],
      gender: ['', [Validators.required]]
    });

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

      this.patientForm.patchValue({
        firstName: this.patient.FirstName,
        lastName: this.patient.LastName,
        pesel: this.patient.PESEL,
        birthDate: this.patient.BirthDate,
        gender: this.patient.Gender
      });

  }});

  }

  save(): void{
    console.log(this.patientForm.value);
    if(this.patientForm.valid){

      let patientRequest: PatientDto = {
        firstName: this.patientForm.get('firstName')?.value,
        lastName: this.patientForm.get('lastName')?.value,
        pesel: this.patientForm.get('pesel')?.value,
        birthDate: this.patientForm.get('birthDate')?.value,
        gender: this.patientForm.get('gender')?.value,
      };
      this.userService.apiUserPatientsIdPut$Json({id: this.patient.PatientID, body: patientRequest})
        .subscribe({
          next: data=>{
            console.log(data);
          }
      });
      
    }
    this.router.navigate(['/patients', this.patient.PatientID])
  }

}
