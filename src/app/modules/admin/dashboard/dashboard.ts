import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../services/usuarios';
import { CursosService } from '../../../services/cursos';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [CommonModule, RouterModule]
})
export class DashboardComponent implements OnInit {
  totalUsuarios: number = 0;
  totalCursos: number = 0;
  usuario: any;

  constructor(
    private usuariosService: UsuariosService,
    private cursosService: CursosService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.usuario = this.authService.getUsuario();
    this.usuariosService.getAll().subscribe(u => this.totalUsuarios = u.length);
    this.cursosService.getAll().subscribe(c => this.totalCursos = c.length);
  }
}