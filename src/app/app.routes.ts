import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';
import { roleGuard } from './guards/role-guard';
import { loginGuard } from './guards/login-guard';

export const routes: Routes = [
  // Ruta raíz
  { path: '', redirectTo: 'login', pathMatch: 'full' },

  // Ruta pública - Login
  {
    path: 'login',
    canActivate: [loginGuard],
    loadChildren: () =>
      import('./modules/auth/auth-module').then(m => m.AuthModule)
  },

  // Rutas Admin
  {
    path: 'admin',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin'] },
    loadChildren: () =>
      import('./modules/admin/admin-module').then(m => m.AdminModule)
  },

  // Rutas Profesor
  {
    path: 'profesor',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['profesor'] },
    loadChildren: () =>
      import('./modules/profesor/profesor-module').then(m => m.ProfesorModule)
  },

  // Rutas Estudiante
  {
    path: 'estudiante',
    canActivate: [authGuard, roleGuard],
    data: { roles: ['estudiante'] },
    loadChildren: () =>
      import('./modules/estudiante/estudiante-module').then(m => m.EstudianteModule)
  },

  // Acceso denegado
  {
    path: 'acceso-denegado',
    loadComponent: () =>
      import('./modules/shared/not-found/not-found').then(m => m.NotFoundComponent)
  },

  // Ruta no encontrada
  {
    path: '**',
    loadComponent: () =>
      import('./modules/shared/not-found/not-found').then(m => m.NotFoundComponent)
  }
];