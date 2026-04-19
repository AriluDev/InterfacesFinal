import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { CursosService } from '../../../services/cursos';
import { UsuariosService } from '../../../services/usuarios';
import { Curso } from '../../../models/curso.model';
import { Usuario } from '../../../models/usuario.model';
import { HighlightDirective } from '../../shared/directives/highlight';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HighlightDirective]
})
export class CursosComponent implements OnInit {
  cursos: Curso[] = [];
  profesores: Usuario[] = [];
  cursoForm: FormGroup;
  editando: boolean = false;
  idEditando: number | null = null;
  cargando: boolean = false;
  mensaje: string = '';
  tipoMensaje: string = '';

  constructor(
    private cursosService: CursosService,
    private usuariosService: UsuariosService,
    private fb: FormBuilder
  ) {
    this.cursoForm = this.fb.group({
      nombre: ['', Validators.required],
      descripcion: ['', Validators.required],
      profesorId: [null, Validators.required],
      profesor: ['', Validators.required],
      creditos: [3, Validators.required],
      estado: ['activo', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarCursos();
    this.cargarProfesores();
  }

  cargarProfesores(): void {
    this.usuariosService.getProfesores().subscribe({
      next: (data) => this.profesores = data
    });
  }

  cargarCursos(): void {
    this.cargando = true;
    this.cursosService.getAll().subscribe({
      next: (data) => {
        this.cursos = data;
        this.cargando = false;
      },
      error: () => this.cargando = false
    });
  }

  onProfesorChange(event: any): void {
    const id = Number(event.target.value);
    const profesor = this.profesores.find(p => p.id === id);
    if (profesor) {
      this.cursoForm.patchValue({
        profesorId: profesor.id,
        profesor: profesor.nombre
      });
    }
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
          this.mostrarMensaje('Curso eliminado correctamente', 'danger');
          this.cargarCursos();
        }
      });
    }
  }

  cancelar(): void {
    this.editando = false;
    this.idEditando = null;
    this.cursoForm.reset({ creditos: 3, estado: 'activo' });
  }

  mostrarMensaje(texto: string, tipo: string): void {
    this.mensaje = texto;
    this.tipoMensaje = tipo;
    setTimeout(() => this.mensaje = '', 3000);
  }
}