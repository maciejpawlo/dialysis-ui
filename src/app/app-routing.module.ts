import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentLayoutComponent } from './modules/layout/content-layout/content-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      // {
      //   path: '',
      //   redirectTo: 'patients',
      //   pathMatch: 'full'
      // },
      {
        path: 'patients',
        loadChildren: () => import('./modules/patient/patient.module').then(m => m.PatientModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
