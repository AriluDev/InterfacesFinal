import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { RoleLabelPipe } from './pipes/role-label-pipe';
import { HighlightDirective } from './directives/highlight';

@NgModule({
  imports: [CommonModule, RouterModule, RoleLabelPipe, HighlightDirective],
  exports: [RoleLabelPipe, HighlightDirective, RouterModule]
})
export class SharedModule { }