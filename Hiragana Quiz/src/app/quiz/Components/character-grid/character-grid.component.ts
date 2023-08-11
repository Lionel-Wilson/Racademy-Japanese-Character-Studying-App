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
  public endCharacters: string[] = ["o","ko","so","to","no","ho","mo","yo","ro","wo","-n","go","zo","do","bo","po","vu"];

 
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
    this.characters = tempCharacters;

    return
 }


 public columnSelected(column: Character[],index:number){
  console.log(column);
  console.log(index);
  column.forEach(element => {
    this.charactersToBeTestedOn.push(element);
  });

  console.log(this.charactersToBeTestedOn);

}


}
