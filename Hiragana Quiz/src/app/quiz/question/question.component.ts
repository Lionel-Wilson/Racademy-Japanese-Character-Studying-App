import { Subscription, Subject, Observable } from 'rxjs';
import { AfterViewInit, Component } from '@angular/core';
import { Quizitem } from 'src/app/shared/Interfaces/quizitem';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})


export class QuestionComponent {
  public questionsData$ : Observable<Quizitem[]> = this.DataService.QuizData$;

  constructor(public DataService:DataService){
    this.questionsData$ = this.DataService.QuizData$;
  }

  }
