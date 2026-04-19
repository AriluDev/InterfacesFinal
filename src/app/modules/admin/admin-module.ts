import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminRoutingModule } from './admin-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { Usuarios } from './usuarios/usuarios';
import { Cursos } from './cursos/cursos';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, AdminRoutingModule, SharedModule, Dashboard, Usuarios, Cursos]
})
export class AdminModule { }