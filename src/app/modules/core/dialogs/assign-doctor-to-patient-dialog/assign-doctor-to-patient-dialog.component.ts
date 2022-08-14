import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { map } from 'rxjs';
import { AssignPatientToDoctorRequest, DoctorDto } from '../../api/models';
import { UserService } from '../../api/services';

@Component({
  selector: 'app-assign-doctor-to-patient-dialog',
  templateUrl: './assign-doctor-to-patient-dialog.component.html',
  styleUrls: ['./assign-doctor-to-patient-dialog.component.css']
})
export class AssignDoctorToPatientDialogComponent implements OnInit {

  assignDoctorForm!: FormGroup;

  doctors!: DoctorDto[];
  patientID!: number;

  constructor(
    public dialogRef: MatDialogRef<AssignDoctorToPatientDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: AssignDoctorToPatientDialogModel,
    private fb: FormBuilder,
    private userService: UserService
    ) { }

  ngOnInit(): void {

    this.assignDoctorForm = this.fb.group({
      doctorToAssign: ['', [Validators.required]]
    });

    this.userService.apiUserDoctorsGet$Json({patientID: Number(this.data.patientID)})
      .subscribe({
        next: data => {

          this.userService.apiUserDoctorsGet$Json()
            .subscribe({
              next: nextData => {
                //filter out doctors assigned to patient
                let ids = data.doctors?.map(x => x.doctorID);
                let filteredData = nextData.doctors?.filter(function(array_el){
                  return data.doctors?.filter(function(anotherOne_el){
                     return anotherOne_el.doctorID == array_el.doctorID;
                  }).length == 0
                });

                this.doctors = filteredData!;

                this.assignDoctorForm.patchValue({
                  doctorToAssign: this.doctors
                });
              }
            });

        }
      });

  }

  onDismiss(): void {
    this.dialogRef.close(false);
  }

  onConfirm(): void {
    //send request to api
    if(this.assignDoctorForm.valid) {
      const request: AssignPatientToDoctorRequest = {
        patientID: this.data.patientID,
        doctorID: (this.assignDoctorForm.get('doctorToAssign')?.value as DoctorDto).doctorID!
      };
      this.userService.apiUserAssignPatientToDoctorPost$Json({body: request})
        .subscribe({
          next: data => {
            this.dialogRef.close(true);
          }
        });
    }
  }

}

export class AssignDoctorToPatientDialogModel {

  constructor(public patientID: number) {
  }
}
