import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trainer } from './Trainer';
import { environment } from '../../environments/environment.development';


@Injectable({
  providedIn: 'root'
})

export class TrainerService {
  private apiUrl = `${environment.baseUrl}/trainers.json`;
constructor(private http: HttpClient) {}

  getTrainers(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.apiUrl);
  }

  getTrainerById(id: number): Observable<Trainer> {
    return this.http.get<Trainer>(`${this.apiUrl}/${id}`);

  }



}
