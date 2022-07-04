import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExaminationDetailsComponent } from './components/examination-details/examination-details.component';
import { ExaminationListComponent } from './components/examination-list/examination-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'examinationsList',
    pathMatch: 'full'
  },
  {
    path: 'examinationsList',
    component: ExaminationListComponent
  },
  {
    path: ':id',
    component: ExaminationDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExaminationRoutingModule { }
