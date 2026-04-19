import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { UsuariosComponent } from './usuarios/usuarios';
import { CursosComponent } from './cursos/cursos';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'usuarios', component: UsuariosComponent },
  { path: 'cursos', component: CursosComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }