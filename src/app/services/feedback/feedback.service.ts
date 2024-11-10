import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private apiUrl = 'http://localhost:8080/api'; 

  constructor(private http: HttpClient) { }

  getFeedbackByEvento(eventoId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/eventos/${eventoId}/feedbacks`);
  }
}
