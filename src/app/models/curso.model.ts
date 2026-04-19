export interface Curso {
  id?: number;
  nombre: string;
  descripcion: string;
  profesorId: number;
  profesor: string;
  creditos: number;
  estado: 'activo' | 'inactivo';
}