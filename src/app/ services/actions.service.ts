// src/app/services/actions.service.ts
import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection, doc,
  addDoc, updateDoc, deleteDoc,
  collectionData, query, orderBy, docData,
  DocumentReference
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Action } from '../models/action.model';

@Injectable({ providedIn: 'root' })
export class ActionsService {
  private fs = inject(Firestore);
  // Colección de Firestore donde se guardan las acciones
  private colRef = collection(this.fs, 'acciones');

  /** Listar todas las acciones, ordenadas por fecha de creación (más recientes primero) */
  list(): Observable<Action[]> {
    const q = query(this.colRef, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Action[]>;
  }

  /** Obtener una acción por id */
  getById(id: string): Observable<Action | undefined> {
    const ref = doc(this.fs, `acciones/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<Action | undefined>;
  }

  /** Crear una acción */
  async create(payload: Action): Promise<DocumentReference> {
    const now = Date.now();
    return addDoc(this.colRef, { ...payload, createdAt: now, updatedAt: now });
  }

  /** Actualizar una acción existente */
  async update(id: string, partial: Partial<Action>): Promise<void> {
    const now = Date.now();
    const ref = doc(this.fs, `acciones/${id}`);
    await updateDoc(ref, { ...partial, updatedAt: now });
  }

  /** Eliminar una acción */
  async remove(id: string): Promise<void> {
    const ref = doc(this.fs, `acciones/${id}`);
    await deleteDoc(ref);
  }
}
