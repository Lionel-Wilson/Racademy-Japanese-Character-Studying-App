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
      //this.questionData = response;

    })
  }

  }
