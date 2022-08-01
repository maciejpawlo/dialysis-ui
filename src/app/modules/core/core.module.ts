import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfirmDialogComponent } from './dialogs/confirm-dialog/confirm-dialog.component';
import { MaterialModule } from '../shared/material.module';
import { InfoDialogComponent } from './dialogs/info-dialog/info-dialog.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    InfoDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ]
})
export class CoreModule { }
