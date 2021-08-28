import {Injectable} from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { API_URL } from '../env';
import { Exam } from './exam.model';
import { Data } from '../data';

@Injectable()
export class ExamsApiService {

httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    };

  constructor(private http: HttpClient) {
  }

  private static _handleError(err: HttpErrorResponse | any) {
    return Observable.throw(err.message || 'Error: Unable to complete request.');
  }

  // GET list of public, future events
  getExams(): Observable<Exam[]> {
    return this.http.get<Exam[]>(`${API_URL}/exams`).pipe(catchError(ExamsApiService._handleError))
  }

  // POST method to save drawings
  addExam(data: Data): Observable<Exam[]> {
    return this.http.post<Exam[]>(`${API_URL}/exams`, data)
  }
}