import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudianteRoutingModule } from './estudiante-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { MisCursos } from './mis-cursos/mis-cursos';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  imports: [CommonModule, EstudianteRoutingModule, SharedModule, Dashboard, MisCursos]
})
export class EstudianteModule { }