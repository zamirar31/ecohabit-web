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
  private colRef = collection(this.fs, 'acciones');

  /** Listar todas las acciones (con id incluido) */
  list(): Observable<Action[]> {
    const q = query(this.colRef, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Action[]>;
  }

  /** Obtener una acción por id (para editar) */
  getById(id: string): Observable<Action | undefined> {
    const ref = doc(this.fs, `acciones/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<Action | undefined>;
  }

  /** Crear */
  async create(payload: Action): Promise<DocumentReference> {
    const now = Date.now();
    return addDoc(this.colRef, { ...payload, createdAt: now, updatedAt: now });
  }

  /** Actualizar */
  async update(id: string, partial: Partial<Action>): Promise<void> {
    const now = Date.now();
    await updateDoc(doc(this.fs, `acciones/${id}`), { ...partial, updatedAt: now });
  }

  /** Eliminar */
  async remove(id: string): Promise<void> {
    await deleteDoc(doc(this.fs, `acciones/${id}`));
  }
}
