import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExaminationRoutingModule } from './examination-routing.module';
import { ExaminationListComponent } from './components/examination-list/examination-list.component';
import { MaterialModule } from '../shared/material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ExaminationDetailsComponent } from './components/examination-details/examination-details.component';


@NgModule({
  declarations: [
    ExaminationListComponent,
    ExaminationDetailsComponent
  ],
  imports: [
    CommonModule,
    ExaminationRoutingModule,
    MaterialModule,
    FlexLayoutModule
  ]
})
export class ExaminationModule { }
