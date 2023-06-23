import { Component, NgModule} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';
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

  public userResult :string|null = null;
  public userResultColor = "";

  constructor(private http: HttpClient) { 
    this.getData().subscribe((results => {
      this.data = results;
      this.numberOfQuestions = this.data.length;
    }))
}


 public getData() : Observable<QuizItem[]>{
  return this.http.get<QuizItem[]>(this.configUrl);
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


