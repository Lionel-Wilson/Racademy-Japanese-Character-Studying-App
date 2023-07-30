import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  public data:QuizItem[]=[];
  public numberOfQuestions:number = 0; 
  public configUrl = 'https://localhost:7013/Quiz';

  constructor(private http: HttpClient) { }

  public getData(numberOfQuestionSetByUser:any){
    this.http.get<QuizItem[]>(this.configUrl,{params:numberOfQuestionSetByUser}).subscribe((results => {
      this.data = results;
      this.numberOfQuestions = this.data.length;
    }))
  }

  public getQuestions( numberOfQuestionSetByUser: NgForm ){
    this.getData(numberOfQuestionSetByUser.value);
  }
}



interface QuizItem {
  id: string;
  hiragana: string;
  answer: string;
}