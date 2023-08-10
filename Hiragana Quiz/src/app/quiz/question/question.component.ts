import { Subscription, Subject, Observable } from 'rxjs';
import { AfterViewInit, Component } from '@angular/core';
import { Quizitem } from 'src/app/shared/Interfaces/quizitem';
import { DataService } from 'src/app/shared/Services/data.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})


export class QuestionComponent {
  public questionData:Quizitem[] =[];
  public numberOfQuestions:number = 0; 
  public userAnswer = new FormControl('');
  public userScore = 0;
  public index = 0;
  public canClickNext = false;
  public quizButtonText :string = "Next";

  public start = false;

  public userResult :string|null = null;
  public userResultColor = "";

  constructor(public DataService:DataService,private router:Router){
    this.DataService.QuizData$.subscribe(response=>{
      this.questionData = response;
      console.log(response);
    })
  }
  public checkAnswers(){
    //console.log(this.questionsData$.source._value);
    /*
    if(this.questionsData$[this.index].answer == this.userAnswer.value && this.canClickNext ==false){
      this.userResult = "Correct!";
      this.userResultColor = "green";
      this.userScore+=1;
      this.canClickNext = true;
      this.quizButtonText = "Next";
      this.userAnswer.reset();
    }
    else if(this.questionsData$[this.index].answer != this.userAnswer.value){
      this.userResultColor = "red";
      this.userResult = "Try Again";
    }
    */

  }
  public endQuiz(){
    this.router.navigate(['/Welcome']);
  }

  public nextQuestion(){
    if(this.index+1 < this.questionData.length-1){
      this.index+= 1;
    }
    else{
      this.index+= 1;
      this.quizButtonText = "End";
    }
    /*
    if (this.index + 1 <this.questionsData$.length){
      this.userResult = null;
      this.index += 1;
      this.canClickNext = false;
    }
    else if(this.quizButtonText==="Start Again"){
      //restart game
      this.userResult = null;
      this.userResultColor = "";
      this.userScore = 0;
      this.canClickNext = false;
      this.quizButtonText = "Check Answer";
      this.userAnswer = new FormControl('');
      this.start=false;
    }
    else{
      this.userResult = "EXAM COMPLETE!";
      this.quizButtonText = "Start Again";
      this.userResultColor = "gold";
      //this.canClickNext = false;

    }
    */

  }

  }
