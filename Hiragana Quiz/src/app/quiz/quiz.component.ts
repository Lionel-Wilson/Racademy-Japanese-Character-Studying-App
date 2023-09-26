import { DataService } from 'src/app/shared/Services/data.service';
import { Component, NgModule} from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormControl, NgForm } from '@angular/forms';
import { catchError, retry } from 'rxjs/operators';
import { BrowserModule } from '@angular/platform-browser';
import { Character } from '../shared/Interfaces/character';
import { Router } from '@angular/router';
import { DoubleConsonants } from '../shared/Interfaces/double-consonants';




@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent {

  public characterData:Character[]=[];
  public doubleConsonantsData:DoubleConsonants[]=[];

  public numberOfQuestions:number = 0; 
  public userAnswer = new FormControl('');
  public userScore = 0;
  public index = 0;
  public canClickNext = false;
  public quizButtonText :string = "Check Answer";

  public showAnswerInputBox = true;

  public answerIsWrong = false;

  public quizComplete = false;
  public doubleConsonantsSelected = false;

  public isLoading:boolean = true;



  public userResult :string|null = null;
  public userResultColor = "";

  constructor(private http: HttpClient,private DataService:DataService, private router:Router) { 
    this.DataService.isLoading$.subscribe((isLoading) => {
      this.isLoading = isLoading;
    });
    this.doubleConsonantsSelected = this.DataService.doubleConsonantsSelected;
    this.getData();
  }

 public getData(){
  console.log(this.doubleConsonantsSelected);
  if(this.doubleConsonantsSelected){
    this.DataService.DoubleConsonantsWords.subscribe((response) => {
      this.doubleConsonantsData = response;
    this.numberOfQuestions = this.doubleConsonantsData.length;

    });
  }
  else{
    this.characterData = this.DataService.questionCharacters;
    this.numberOfQuestions = this.characterData.length;
  }

}

public playSound(isMute:boolean,answerIsWrong:boolean ){
  if(isMute){
    return;
  }
  else{
    let audio = new Audio();
    if(answerIsWrong){
      audio.src = "../../assets/audio/Wrong Answer Sound Effect.mp3";
    }
    else{
      audio.src = "../../assets/audio/CORRECT ANSWER SOUND EFFECT.mp3";
    }

    audio.load();
    audio.play();
  }

}


public checkAnswers(){
  if(this.doubleConsonantsSelected){
    console.log("I chose double consonants")

  //correct answer
  if(this.doubleConsonantsData[this.index].romanization == this.userAnswer.value?.toLowerCase() && this.canClickNext ==false){
    this.answerIsWrong = false;
    this.playSound(false,this.answerIsWrong);
    this.userResult = "正解！ Keep going!";
    this.userResultColor = "green";
    this.userScore+=1;
    this.canClickNext = true;
    this.showAnswerInputBox = false;
    this.quizButtonText = "Next";
    this.userAnswer.reset();
  }
//wrong answer
  else if(this.doubleConsonantsData[this.index].romanization != this.userAnswer.value?.toLowerCase()){
    this.answerIsWrong = true;
    this.playSound(false,this.answerIsWrong);
    this.canClickNext = true;
    this.showAnswerInputBox = false;
    this.quizButtonText = "Next";
    this.userAnswer.reset();
    this.userResultColor = "red";
    this.userResult = "残念！ Better luck next time!";
  }
  }
  else{
  //correct answer
  if(this.characterData[this.index].romanization == this.userAnswer.value?.toLowerCase() && this.canClickNext ==false){
    this.answerIsWrong = false;
    this.playSound(false,this.answerIsWrong);
    this.userResult = "正解！ Keep going!";
    this.userResultColor = "green";
    this.userScore+=1;
    this.canClickNext = true;
    this.showAnswerInputBox = false;
    this.quizButtonText = "Next";
    this.userAnswer.reset();
  }
//wrong answer
  else if(this.characterData[this.index].romanization != this.userAnswer.value?.toLowerCase()){
    this.answerIsWrong = true;
    this.playSound(false,this.answerIsWrong);
    this.canClickNext = true;
    this.showAnswerInputBox = false;
    this.quizButtonText = "Next";
    this.userAnswer.reset();
    this.userResultColor = "red";
    this.userResult = "残念！ Better luck next time!";
  }
  }
  }

  public nextQuestion(){
    if(this.doubleConsonantsSelected){


      if (this.index + 1 <this.doubleConsonantsData.length){
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
        this.quizComplete = true;
        this.userResult = "EXAM COMPLETE!";
        this.quizButtonText = "Start Again";
        this.userResultColor = "gold";
        //this.canClickNext = false;
  
      }
    }
    else{

      if (this.index + 1 <this.characterData.length){
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
        this.quizComplete = true;
        this.userResult = "EXAM COMPLETE!";
        this.quizButtonText = "Start Again";
        this.userResultColor = "gold";
        //this.canClickNext = false;
  
      }
    }


  }

  }




