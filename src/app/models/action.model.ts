// src/app/models/action.model.ts
export interface Action {
  id?: string;          // ID generado por Firestore (opcional)
  userId: string;       // Usuario que realiza la acción
  type: string;         // Tipo de acción (reciclaje, energía, etc.)
  points: number;       // Puntos obtenidos
  date: string;         // Fecha en formato YYYY-MM-DD
  notes?: string;       // Notas opcionales
  createdAt?: number;   // Timestamp de creación
  updatedAt?: number;   // Timestamp de actualización
}

