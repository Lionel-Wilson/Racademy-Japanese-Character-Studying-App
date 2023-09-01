import { DataService } from 'src/app/shared/Services/data.service';
import { Component, NgModule} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, NgForm } from '@angular/forms';
import { catchError, retry } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { Character } from '../shared/Interfaces/character';
import { Router } from '@angular/router';




@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  public data:Character[]=[];
  public numberOfQuestions:number = 0; 
  public configUrl = 'https://localhost:7013/Quiz';
  public userAnswer = new FormControl('');
  public userScore = 0;
  public index = 0;
  public canClickNext = false;
  public quizButtonText :string = "Check Answer";

  public showAnswerInputBox = true;

  public answerIsWrong = false;



  public userResult :string|null = null;
  public userResultColor = "";

  constructor(private http: HttpClient,private DataService:DataService, private router:Router) { 
    this.getData();
  }

 public getData(){
  this.data = this.DataService.questionCharacters;
  this.numberOfQuestions = this.data.length;
}



public checkAnswers(){
    if(this.data[this.index].romanization == this.userAnswer.value?.toLowerCase() && this.canClickNext ==false){
      this.answerIsWrong = false;
      this.userResult = "正解！ Keep going!";
      this.userResultColor = "green";
      this.userScore+=1;
      this.canClickNext = true;
      this.showAnswerInputBox = false;
      this.quizButtonText = "Next";
      this.userAnswer.reset();
    }
    else if(this.data[this.index].romanization != this.userAnswer.value?.toLowerCase()){
      this.answerIsWrong = true;
      this.canClickNext = true;
      this.showAnswerInputBox = false;
      this.quizButtonText = "Next";
      this.userAnswer.reset();
      this.userResultColor = "red";
      this.userResult = "残念！ Better luck next time!";
    }

  }

  public nextQuestion(){
    if (this.index + 1 <this.data.length){
      this.userResult = null;
      this.index += 1;
      this.canClickNext = false;
      this.showAnswerInputBox = true;
      this.answerIsWrong = false;
      this.quizButtonText = "Check Answer";
    }
    else if(this.quizButtonText==="Start Again"){
      //restart game
      this.userResult = null;
      this.userResultColor = "";
      this.userScore = 0;
      this.canClickNext = false;
      this.showAnswerInputBox = true;
      this.quizButtonText = "Check Answer";
      this.userAnswer = new FormControl('');
      this.router.navigate(['/Study']);
      this.answerIsWrong = false;

   
    }
    else{
      this.userResult = "EXAM COMPLETE!";
      this.quizButtonText = "Start Again";
      this.userResultColor = "gold";
      //this.canClickNext = false;

    }

  }

  }



interface QuizItem {
  id: string;
  hiragana: string;
  answer: string;
}


