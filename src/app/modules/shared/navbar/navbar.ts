import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth';
import { Usuario } from '../../../models/usuario.model';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.html'
})
export class NavbarComponent {
  usuario: Usuario | null = null;

  constructor(private authService: AuthService, private router: Router) {
    this.usuario = this.authService.getUsuario();
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  logout(): void {
    this.authService.logout();
  }

  getRol(): string {
    return this.authService.getRol() || '';
  }
}