import { CanActivateFn, Router, ActivatedRouteSnapshot } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth';

export const roleGuard: CanActivateFn = (route: ActivatedRouteSnapshot) => {
  const authService = inject(AuthService);
  const router = inject(Router);

  const rolesPermitidos: string[] = route.data['roles'] || [];
  const rolUsuario = authService.getRol();

  if (rolUsuario && rolesPermitidos.includes(rolUsuario)) {
    return true;
  }

  router.navigate(['/acceso-denegado']);
  return false;
};