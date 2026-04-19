import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfesorRoutingModule } from './profesor-routing-module';
import { Dashboard } from './dashboard/dashboard';
import { MisCursos } from './mis-cursos/mis-cursos';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, ProfesorRoutingModule, SharedModule, Dashboard, MisCursos]
})
export class ProfesorModule { }