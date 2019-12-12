import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReportComponent } from './report/components/report/report.component';

const routes: Routes = [
  {
    path: 'reports',
    component: ReportComponent
  },
  {
    path: '',
    redirectTo: 'reports',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
