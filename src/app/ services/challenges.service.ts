// src/app/services/challenges.service.ts
import { inject, Injectable } from '@angular/core';
import {
  Firestore,
  collection, doc,
  addDoc, updateDoc, deleteDoc,
  collectionData, query, orderBy, docData,
  DocumentReference
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Challenge } from '../models/challenge.model';

@Injectable({ providedIn: 'root' })
export class ChallengesService {
  private fs = inject(Firestore);
  private colRef = collection(this.fs, 'retos');   // ← colección: retos

  list(): Observable<Challenge[]> {
    const q = query(this.colRef, orderBy('createdAt', 'desc'));
    return collectionData(q, { idField: 'id' }) as Observable<Challenge[]>;
  }

  getById(id: string): Observable<Challenge | undefined> {
    const ref = doc(this.fs, `retos/${id}`);
    return docData(ref, { idField: 'id' }) as Observable<Challenge | undefined>;
  }

  async create(payload: Challenge): Promise<DocumentReference> {
    const now = Date.now();
    return addDoc(this.colRef, { ...payload, createdAt: now, updatedAt: now });
  }

  async update(id: string, partial: Partial<Challenge>): Promise<void> {
    const now = Date.now();
    await updateDoc(doc(this.fs, `retos/${id}`), { ...partial, updatedAt: now });
  }

  async remove(id: string): Promise<void> {
    await deleteDoc(doc(this.fs, `retos/${id}`));
  }
}
