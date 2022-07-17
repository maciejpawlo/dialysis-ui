import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthLayoutComponent } from './modules/layout/auth-layout/auth-layout.component';
import { ContentLayoutComponent } from './modules/layout/content-layout/content-layout.component';
//TODO: add guard to content layout
const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'patients',
        pathMatch: 'full'
      },
      {
        path: 'patients',
        loadChildren: () => import('./modules/patient/patient.module').then(m => m.PatientModule)
      },
      {
        path: 'examinations',
        loadChildren: () => import('./modules/examination/examination.module').then(m=>m.ExaminationModule)
      }
    ]
  },
  {
    path: 'auth',
    component: AuthLayoutComponent,
    loadChildren: () => import('./modules/auth/auth.module').then(m=>m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
