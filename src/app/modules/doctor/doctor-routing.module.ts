import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorAddComponent } from './components/doctor-add/doctor-add.component';
import { DoctorEditComponent } from './components/doctor-edit/doctor-edit.component';
import { DoctorListComponent } from './components/doctor-list/doctor-list.component';

const routes: Routes = [
  {
  path: '',
  redirectTo: 'doctorList',
  pathMatch: 'full'
},
{
  path: 'doctorList',
  component: DoctorListComponent
},
{
  path: 'add',
  component: DoctorAddComponent
},
{
  path: ':id/edit',
  component: DoctorEditComponent
},
{
  path: '**',
  redirectTo: 'doctorList'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
