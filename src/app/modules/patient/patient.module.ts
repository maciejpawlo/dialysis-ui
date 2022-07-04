import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';


@NgModule({
  declarations: [
    PatientListComponent,
    PatientDetailsComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class PatientModule { }
