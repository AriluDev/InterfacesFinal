import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { EstudianteRoutingModule } from './estudiante-routing-module';
import { DashboardComponent } from './dashboard/dashboard';
import { MisCursosComponent } from './mis-cursos/mis-cursos';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  imports: [CommonModule, RouterModule, EstudianteRoutingModule, SharedModule, DashboardComponent, MisCursosComponent]
})
export class EstudianteModule { }