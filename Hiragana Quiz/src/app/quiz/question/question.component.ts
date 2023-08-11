import { Subscription, Subject, Observable } from 'rxjs';
import { AfterViewInit, Component } from '@angular/core';
import { Character } from 'src/app/shared/Interfaces/character';
import { DataService } from 'src/app/shared/Services/data.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})


export class QuestionComponent {
  public questionData:Character[] =[];
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

  }

  }
