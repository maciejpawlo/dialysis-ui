import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Gender } from 'src/app/modules/core/api/models/gender';
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
    private router: Router
    ) { }

  patientForm!: FormGroup;
  patient!: Patient;

  ngOnInit(): void {
    const patientID = this.route.snapshot.paramMap.get('id');
    console.log('edit patient with id: ', patientID);
    //TODO: get patient by id
    this.patient = {
      PatientID: Number(patientID),
      FirstName: "Pacjent",
      LastName: "Testowy",
      PESEL: "75010595778",
      BirthDate: new Date('2019-01-16'),
      CreatedAt: new Date('2019-01-16'),
      UserID: 'sadsadasd',
      Gender: Gender.$0
    };

    this.patientForm = this.fb.group({
      firstName: [this.patient.FirstName, [Validators.required]],
      lastName: [this.patient.LastName, [Validators.required]],
      pesel: [this.patient.PESEL, [Validators.required, Validators.pattern('^[0-9]{11}$')]],
      birthDate: [this.patient.BirthDate, [Validators.required]],
      gender: [this.patient.Gender, [Validators.required]]
    });
  }

  save(): void{
    console.log(this.patientForm);
    //TODO: Send request -> add patient
    this.router.navigate(['/patients', this.patient.PatientID])
  }

}
