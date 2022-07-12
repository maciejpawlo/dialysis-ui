import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientAddComponent } from './components/patient-add/patient-add.component';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
import { PatientEditComponent } from './components/patient-edit/patient-edit.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'patientsList',
    pathMatch: 'full'
  },
  {
    path: 'patientsList',
    component: PatientListComponent
  },
  {
    path: 'add',
    component: PatientAddComponent
  },
  {
    path: ':id/edit',
    component: PatientEditComponent
  },
  {
    path: ':id',
    component: PatientDetailsComponent
  },
  {
    path: '**',
    redirectTo: 'patientsList'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
