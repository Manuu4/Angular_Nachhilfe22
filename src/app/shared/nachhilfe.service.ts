import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Course, Lesson, User} from "./lesson";
import {catchError, Observable, retry, throwError} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class NachhilfeService {


  // lessons : Lesson[];
  private api = 'http://nachhilfe22.s1910456032.student.kwmhgb.at/api';

  constructor(private http: HttpClient) {

  }

  // constructor() {
  //   this.lessons = [
  //     new Lesson(
  //       "1",
  //       'Wir lernen zusammen',
  //       'Hier lernt man dies',
  //       "3",
  //       'offen',
  //       new User("1",'Manu', 'Strobel', 'KWM', true, 'manu@gmail.com'),
  //       new Course("1",'Komm-Wissenschaften', 'Alles dzu dem Thema', "4"),
  //       new Date('2022,5,28')
  //     ),
  //     new Lesson(
  //       "2",
  //       'Ein wenig üben',
  //       'Hier lernt man jenes',
  //       "3",
  //       'offen',
  //       new User("2",'Marc', 'Strobel', 'KWM', true, 'marc@gmail.com'),
  //       new Course("1",'Adaptivität', 'Ganz viel Input', "6"),
  //       new Date('2022,6,30'),
  //       new Date('2022,1,11')
  //     )];
  // }

  getAll(): Observable<Array<Lesson>>{
    return this.http.get<Array<Lesson>>(`${this.api}/lessons`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getSingle(id: string) : Observable<Lesson> {
    return this.http.get<Lesson>(`${this.api}/lessons/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  remove(id: string): Observable<any>{
    return this.http.delete(`${this.api}/lessons/${id}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  getAllSearch(searchTerm:string) : Observable<Array<Lesson>> {
    return this.http.get<Lesson>(`${this.api}/lessons/search/${searchTerm}`).pipe(retry(3)).pipe(catchError(this.errorHandler));
  }

  private errorHandler(error: Error | any): Observable<any>{
    return throwError(() => new Error(error));
  }

}
