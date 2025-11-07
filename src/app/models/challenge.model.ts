// src/app/models/challenge.model.ts
export interface Challenge {
  id?: string;
  name: string;
  description?: string;
  points: number;        // recompensa o puntaje del reto
  startDate: string;     // 'YYYY-MM-DD'
  endDate: string;       // 'YYYY-MM-DD'
  active: boolean;
  createdAt?: number;
  updatedAt?: number;
}

