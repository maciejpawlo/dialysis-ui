import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
  path: '**',
  redirectTo: 'doctorList'
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorRoutingModule { }
