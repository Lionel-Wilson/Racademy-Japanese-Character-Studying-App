import { Quizitem } from 'src/app/shared/Interfaces/quizitem';
import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/Services/data.service';

@Component({
  selector: 'app-character-grid',
  templateUrl: './character-grid.component.html',
  styleUrls: ['./character-grid.component.css']
})
export class CharacterGridComponent {

  public characters:Quizitem[][] =[];
  public rows :Array<number>=[];
  public columnsSelected: Quizitem[][] =[];
  public charactersToBeTestedOn: Quizitem[]=[];

 
  constructor(private DataService:DataService){
  this.DataService.QuizData$.subscribe(response=>{
    this.characters = response;


  })


 }
 public columnSelected(column: Quizitem[],index:number){
  console.log(column);
  console.log(index);
  column.forEach(element => {
    this.charactersToBeTestedOn.push(element);
  });

  console.log(this.charactersToBeTestedOn);

}


}
