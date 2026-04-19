import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../../services/auth';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './not-found.html'
})
export class NotFoundComponent {
  constructor(private authService: AuthService) {}

  getRol(): string {
    return this.authService.getRol() || '';
  }
}