import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuariosService } from '../../../services/usuarios';
import { Usuario } from '../../../models/usuario.model';
import { HighlightDirective } from '../../shared/directives/highlight';
import { RoleLabelPipe } from '../../shared/pipes/role-label-pipe';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.html',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HighlightDirective, RoleLabelPipe]
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  usuarioForm: FormGroup;
  editando: boolean = false;
  idEditando: number | null = null;
  cargando: boolean = false;
  mensaje: string = '';
  tipoMensaje: string = '';

  constructor(
    private usuariosService: UsuariosService,
    private fb: FormBuilder
  ) {
    this.usuarioForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['estudiante', Validators.required]
    });
  }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.cargando = true;
    this.usuariosService.getAll().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: () => this.cargando = false
    });
  }

  onSubmit(): void {
    if (this.usuarioForm.invalid) return;
    if (this.editando && this.idEditando) {
      this.usuariosService.update(this.idEditando, this.usuarioForm.value).subscribe({
        next: () => {
          this.mostrarMensaje('Usuario actualizado correctamente', 'success');
          this.cancelar();
          this.cargarUsuarios();
        }
      });
    } else {
      this.usuariosService.create(this.usuarioForm.value).subscribe({
        next: () => {
          this.mostrarMensaje('Usuario creado correctamente', 'success');
          this.cancelar();
          this.cargarUsuarios();
        }
      });
    }
  }

  editar(usuario: Usuario): void {
    this.editando = true;
    this.idEditando = usuario.id!;
    this.usuarioForm.patchValue(usuario);
  }

  eliminar(id: number): void {
    if (confirm('¿Estás seguro de eliminar este usuario?')) {
      this.usuariosService.delete(id).subscribe({
        next: () => {
          this.mostrarMensaje('Usuario eliminado correctamente', 'danger');
          this.cargarUsuarios();
        }
      });
    }
  }

  cancelar(): void {
    this.editando = false;
    this.idEditando = null;
    this.usuarioForm.reset({ rol: 'estudiante' });
  }

  mostrarMensaje(texto: string, tipo: string): void {
    this.mensaje = texto;
    this.tipoMensaje = tipo;
    setTimeout(() => this.mensaje = '', 3000);
  }
}