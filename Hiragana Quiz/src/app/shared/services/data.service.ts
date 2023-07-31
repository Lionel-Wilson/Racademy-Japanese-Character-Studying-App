import { Injectable } from '@angular/core';
import { Quizitem } from '../Interfaces/quizitem';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  public QuizData :Quizitem[]=[];

  constructor(private http: HttpClient) { }

  public getQuestionData(numberOfQuestionSetByUser:any){
    this.http.get<Quizitem[]>(environment.QuizApiUrl,{params:numberOfQuestionSetByUser}).subscribe((results => {
      this.QuizData = results;
    }))
}

}
