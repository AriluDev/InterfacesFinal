import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { MisCursosComponent } from './mis-cursos/mis-cursos';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'mis-cursos', component: MisCursosComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }