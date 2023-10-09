import { Router } from '@angular/router';
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


  public showAlert = false;
  public randomiseEnabled: boolean = false;
  public muteEnabled: boolean = false;

  


  public selectedColumn :Character[]=[];  

  public selectedColumnindexes : number[]=[];

 
  constructor(private DataService:DataService,private router: Router){
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
  if(this.selectedColumnindexes.includes(index)){
    const newSelectedColumnIndexes = this.selectedColumnindexes.filter(item => item !== index);
    this.selectedColumnindexes = newSelectedColumnIndexes;

    const newCharactersToBeTestedOn = this.charactersToBeTestedOn.filter(char => !column.includes(char));
    this.charactersToBeTestedOn = newCharactersToBeTestedOn;
  }
  else{

    this.selectedColumnindexes.push(index);
    column.forEach(element => {
      this.charactersToBeTestedOn.push(element);
    });
  }

}

public startQuiz(){
  if(this.charactersToBeTestedOn.length > 0){
    if(this.randomiseEnabled){
      this.DataService.questionCharacters = this.shuffleArray(this.charactersToBeTestedOn);
    }
    else{
      this.DataService.questionCharacters = this.charactersToBeTestedOn;
    }
    this.DataService.setMuteState(this.muteEnabled);
    this.router.navigate(['/Quiz']);
  }
  else{
    this.showAlert = true;
  }
  
}
public closeSelectColumnAlert(){
  console.log(this.showAlert);
  if(this.showAlert){
    this.showAlert = false;
  }
}

private shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array]; // Create a shallow copy of the original array

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    // Generate a random index between 0 and i
    const randomIndex = Math.floor(Math.random() * (i + 1));

    // Swap elements at randomIndex and i
    [shuffledArray[i], shuffledArray[randomIndex]] = [shuffledArray[randomIndex], shuffledArray[i]];
  }

  return shuffledArray;
}



}
