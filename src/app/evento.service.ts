import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  private apiUrl = 'http://localhost:3000/api/eventos';

  constructor(private http: HttpClient) { }

  createEvento(evento: any): Observable<any> {
    return this.http.post(this.apiUrl, evento);
  }

  getEventos(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getEventoById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  updateEvento(id: string, evento: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, evento);
  }

  deleteEvento(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
