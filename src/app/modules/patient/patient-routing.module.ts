import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientDetailsComponent } from './components/patient-details/patient-details.component';
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
    path: ':id',
    component: PatientDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientRoutingModule { }
