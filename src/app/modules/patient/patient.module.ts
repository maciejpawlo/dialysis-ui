import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PatientRoutingModule } from './patient-routing.module';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ReactiveFormsModule } from '@angular/forms';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { BrowserModule } from '@angular/platform-browser';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';


@NgModule({
  declarations: [
    PatientListComponent,
    PatientDetailsComponent,
    PatientAddComponent,
    PatientEditComponent
  ],
  imports: [
    CommonModule,
    PatientRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    NgxChartsModule,
    ReactiveFormsModule
  ]
})
export class PatientModule { }
