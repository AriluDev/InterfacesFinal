import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing-module';
import { DashboardComponent } from './dashboard/dashboard';
import { UsuariosComponent } from './usuarios/usuarios';
import { CursosComponent } from './cursos/cursos';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, AdminRoutingModule, SharedModule, DashboardComponent, UsuariosComponent, CursosComponent]
})
export class AdminModule { }