import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfesorRoutingModule } from './profesor-routing-module';
import { DashboardComponent } from './dashboard/dashboard';
import { MisCursosComponent } from './mis-cursos/mis-cursos';
import { SharedModule } from '../shared/shared-module';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule, ProfesorRoutingModule, SharedModule, DashboardComponent, MisCursosComponent]
})
export class ProfesorModule { }