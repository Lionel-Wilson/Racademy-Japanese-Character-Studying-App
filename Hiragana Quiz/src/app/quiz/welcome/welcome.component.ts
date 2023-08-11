import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Quizitem } from 'src/app/shared/Interfaces/quizitem';
import { DataService } from 'src/app/shared/Services/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  public numberOfQuestions:number = 0; 
 
  constructor(private DataService:DataService, private router:Router) { }

  public getQuestions( numberOfQuestionSetByUser: NgForm ){ 
    //this.DataService.getCharactersforGrid(numberOfQuestionSetByUser.value);
    this.router.navigate(['/Question']);
  }
}
