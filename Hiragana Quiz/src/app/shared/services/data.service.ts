import { Injectable } from '@angular/core';
import { Quizitem } from '../Interfaces/quizitem';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private quizDataSubject = new BehaviorSubject<Quizitem[]>([]);
  public QuizData$ = this.quizDataSubject.asObservable();

  constructor(private http: HttpClient) { }

  public getQuestionData(numberOfQuestionSetByUser:any){
    this.http.get<Quizitem[]>(environment.QuizApiUrl,{params:numberOfQuestionSetByUser}).subscribe((results => {
      this.quizDataSubject.next(results);
    }))
}

}
