import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roleLabel',
  standalone: true
})
export class RoleLabelPipe implements PipeTransform {
  transform(rol: string): string {
    const roles: { [key: string]: string } = {
      'admin': '👑 Administrador',
      'profesor': '👨‍🏫 Profesor',
      'estudiante': '🎓 Estudiante'
    };
    return roles[rol] || rol;
  }
}