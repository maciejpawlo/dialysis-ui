import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { map } from 'rxjs';
import { DoctorDto } from 'src/app/modules/core/api/models';
import { UserService } from 'src/app/modules/core/api/services';

@Component({
  selector: 'app-doctor-edit',
  templateUrl: './doctor-edit.component.html',
  styleUrls: ['./doctor-edit.component.css']
})
export class DoctorEditComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private router: Router,
    private userService: UserService
    ) { }

  doctorForm!: FormGroup;

  ngOnInit(): void {
    const doctorID = this.route.snapshot.paramMap.get('id');
    this.doctorForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      permissionNumber: ['', [Validators.required]]
    });

    this.userService.apiUserDoctorsIdGet$Json({id: Number(doctorID)})
      .pipe(map(data => {
        return data.doctors![0];
      }))
      .subscribe({
        next: data => {
          this.doctorForm.patchValue({
            firstName: data.firstName,
            lastName: data.lastName,
            permissionNumber: data.lastName
          });
        }
      });
  }

  save(): void {
    if (this.doctorForm.valid) {
      const doctorID = this.route.snapshot.paramMap.get('id');
      const request: DoctorDto = {
        firstName: this.doctorForm.get('firstName')?.value,
        lastName: this.doctorForm.get('lastName')?.value,
        permissionNumber: this.doctorForm.get('permissionNumber')?.value
      }
      this.userService.apiUserDoctorsIdPut$Json({id: Number(doctorID), body: request})
        .subscribe({
          next: data => {
            this.router.navigate(['/doctors', doctorID]);
          }
        });
    }
  }
}
