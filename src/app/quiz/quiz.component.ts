import { Component, NgModule} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, NgForm } from '@angular/forms';
import { catchError, retry } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';



@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  public data:QuizItem[]=[];
  public numberOfQuestions:number = 0; 
  public configUrl = 'https://localhost:7013/Quiz';
  public userAnswer = new FormControl('');
  public userScore = 0;
  public index = 0;
  public canClickNext = false;

  public start = false;

  public userResult :string|null = null;
  public userResultColor = "";

  constructor(private http: HttpClient) { }

 public getData(numberOfQuestionSetByUser:any){
  this.http.get<QuizItem[]>(this.configUrl,{params:numberOfQuestionSetByUser}).subscribe((results => {
    this.data = results;
    this.numberOfQuestions = this.data.length;
    this.start = true;
  }))
}

public getQuestions( numberOfQuestionSetByUser: NgForm ){
  this.getData(numberOfQuestionSetByUser.value);
}

public checkAnswers(){
    if(this.data[this.index].answer == this.userAnswer.value && this.canClickNext ==false){
      this.userResult = "Correct!";
      this.userResultColor = "green";
      this.userScore+=1;
      this.canClickNext = true;
    }
    else if(this.data[this.index].answer != this.userAnswer.value){
      this.userResultColor = "red";
      this.userResult = "Try Again";
    }

  }

  public nextQuestion(){
    if (this.index + 1 <this.data.length){
      this.userResult = null;
      this.index += 1;
      this.canClickNext = false;
    }
    else{
      this.userResult = "EXAM COMPLETE!";
      this.userResultColor = "gold";
      this.canClickNext = false;

    }

  }

  }



interface QuizItem {
  id: string;
  hiragana: string;
  answer: string;
}


