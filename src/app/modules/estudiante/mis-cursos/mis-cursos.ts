import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosService } from '../../../services/cursos';
import { AuthService } from '../../../services/auth';
import { Curso } from '../../../models/curso.model';
import { HighlightDirective } from '../../shared/directives/highlight';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.html',
  standalone: true,
  imports: [CommonModule, HighlightDirective]
})
export class MisCursosComponent implements OnInit {
  cursos: Curso[] = [];
  cargando: boolean = false;
  usuario: any;

  constructor(
    private cursosService: CursosService,
    private authService: AuthService
  ) {
    this.usuario = this.authService.getUsuario();
  }

  ngOnInit(): void {
    this.cargando = true;
    this.cursosService.getAll().subscribe({
      next: (data) => {
        this.cursos = data.filter(c => c.estado === 'activo');
        this.cargando = false;
      },
      error: () => this.cargando = false
    });
  }
}