import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosService } from '../../../services/cursos';
import { AuthService } from '../../../services/auth';
import { Curso } from '../../../models/curso.model';
import { HighlightDirective } from '../../shared/directives/highlight';

@Component({
  selector: 'app-mis-cursos',
  templateUrl: './mis-cursos.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HighlightDirective]
})
export class MisCursosComponent implements OnInit {
  cursos: Curso[] = [];
  cursoForm: FormGroup;
  editando: boolean = false;
  idEditando: number | null = null;
  cargando: boolean = false;
  mensaje: string = '';
  tipoMensaje: string = '';
  usuario: any;

  constructor(
    private cursosService: CursosService,
    private authService: AuthService,
    private fb: FormBuilder
  ) {
    this.usuario = this.authService.getUsuario();
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      profesorId: [this.usuario?.id],
      profesor: [this.usuario?.nombre],
      creditos: [3, Validators.required],
      estado: ['activo', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarCursos();
  }

  cargarCursos(): void {
    this.cargando = true;
    this.cursosService.getAll().subscribe({
      next: (data) => {
        this.cursos = data.filter(c => c.profesorId === this.usuario.id);
        this.cargando = false;
      },
      error: () => this.cargando = false
    });
  }

  onSubmit(): void {
    if (this.cursoForm.invalid) return;
    if (this.editando && this.idEditando) {
      this.cursosService.update(this.idEditando, this.cursoForm.value).subscribe({
        next: () => {
          this.mostrarMensaje('Curso actualizado correctamente', 'success');
          this.cancelar();
          this.cargarCursos();
        }
      });
    } else {
      this.cursosService.create(this.cursoForm.value).subscribe({
        next: () => {
          this.mostrarMensaje('Curso creado correctamente', 'success');
          this.cancelar();
          this.cargarCursos();
        }
      });
    }
  }

  editar(curso: Curso): void {
    this.editando = true;
    this.idEditando = curso.id!;
    this.cursoForm.patchValue(curso);
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar este curso?')) {
      this.cursosService.delete(id).subscribe({
        next: () => {
          this.mostrarMensaje('Curso eliminado', 'danger');
          this.cargarCursos();
        }
      });
    }
  }

  cancelar(): void {
    this.editando = false;
    this.idEditando = null;
    this.cursoForm.reset({
      profesorId: this.usuario?.id,
      profesor: this.usuario?.nombre,
      creditos: 3,
      estado: 'activo'
    });
  }

  mostrarMensaje(texto: string, tipo: string): void {
    this.mensaje = texto;
    this.tipoMensaje = tipo;
    setTimeout(() => this.mensaje = '', 3000);
  }
}