import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { MisCursos } from './mis-cursos/mis-cursos';

const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'mis-cursos', component: MisCursos },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfesorRoutingModule { }