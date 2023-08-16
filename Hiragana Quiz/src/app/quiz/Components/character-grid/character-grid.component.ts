import { Character } from 'src/app/shared/Interfaces/character';
import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/Services/data.service';

@Component({
  selector: 'app-character-grid',
  templateUrl: './character-grid.component.html',
  styleUrls: ['./character-grid.component.css']
})
export class CharacterGridComponent {

  public characters:Character[][] =[];
  public rows :Array<number>=[];
  public columnsSelected: Character[][] =[];
  public charactersToBeTestedOn: Character[]=[];
  public endCharacters: string[] = ["o","ko","so","to","no","ho","mo","yo","ro","wo","-n","go","zo","do","bo","po","vu","kyo","syo","tyo","nyo","hyo","myo","ryo","gyo","zyo","dyo","zyo","byo","byo"];

  public columnSelectedColour:Boolean = false;

  public selectedColumnIndex=-1;
  public selectedColumn :Character[]=[];  

 
  constructor(private DataService:DataService){
    this.DataService.Characters.subscribe(response=>{
      this.formatCharactersForGrid(response);
    })
    
  /*this.DataService.QuizData$.subscribe(response=>{
    this.characters = response;
  })*/


 }

 public formatCharactersForGrid(characterList:Character[]){

    const tempCharacters = [];
    var tempColumn =[];
    for(let i =0; i<characterList.length;i++){
      if(this.endCharacters.includes(characterList[i].char_id)  ){
        tempColumn.push(characterList[i]);
        tempCharacters.push(tempColumn);
        tempColumn = [];

      }
      else{
        tempColumn.push(characterList[i]);
      }
    }
    this.characters = tempCharacters.slice().reverse();

    return
 }


 public columnSelected(column: Character[],index:number){

  if(this.columnSelectedColour){
    this.selectedColumnIndex = -1;
    this.selectedColumn = [];
    this.columnSelectedColour =false;
  }
  else{
    this.selectedColumn = column;
    this.selectedColumnIndex = index;
    this.columnSelectedColour =true;
  }
  console.log(column);
  console.log(index);
  column.forEach(element => {
    this.charactersToBeTestedOn.push(element);
  });

 

}


}
