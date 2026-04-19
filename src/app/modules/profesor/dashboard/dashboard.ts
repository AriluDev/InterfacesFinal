import { Component, OnInit } from '@angular/core';
import { CursosService } from '../../../services/cursos';
import { AuthService } from '../../../services/auth';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  imports: [CommonModule, RouterModule]
})
export class DashboardComponent implements OnInit {
  totalCursos: number = 0;
  usuario: any;

  constructor(
    private cursosService: CursosService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.usuario = this.authService.getUsuario();
    this.cursosService.getAll().subscribe(c => {
      this.totalCursos = c.filter(curso => curso.profesorId === this.usuario.id).length;
    });
  }
}