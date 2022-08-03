import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorRoutingModule } from './doctor-routing.module';
import { MaterialModule } from '../shared/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './components/doctor-add/doctor-add.component';
import { DoctorEditComponent } from './components/doctor-edit/doctor-edit.component';


@NgModule({
  declarations: [
    DoctorListComponent,
    DoctorAddComponent,
    DoctorEditComponent
  ],
  imports: [
    CommonModule,
    DoctorRoutingModule,
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ]
})
export class DoctorModule { }
