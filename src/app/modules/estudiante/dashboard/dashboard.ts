import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [CommonModule, RouterModule]
})
export class DashboardComponent implements OnInit {
  usuario: any;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.usuario = this.authService.getUsuario();
  }
}