import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { Usuarios } from './usuarios/usuarios';
import { Cursos } from './cursos/cursos';

const routes: Routes = [
  { path: 'dashboard', component: Dashboard },
  { path: 'usuarios', component: Usuarios },
  { path: 'cursos', component: Cursos },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }