import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../shared/material.module';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';
import { AssignDoctorToPatientDialogComponent } from './dialogs/assign-doctor-to-patient-dialog/assign-doctor-to-patient-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    InfoDialogComponent,
    AssignDoctorToPatientDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class CoreModule { }
