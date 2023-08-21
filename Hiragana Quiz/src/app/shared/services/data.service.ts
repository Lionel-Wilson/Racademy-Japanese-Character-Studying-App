import { AngularFireModule } from '@angular/fire/compat';
import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/character';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject,Observable } from 'rxjs';
import { getDatabase, ref, onValue,  } from "firebase/database";
import { initializeApp } from 'firebase/app'; // Import initializeApp

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private CharactersSubject = new BehaviorSubject<Character[]>([]);
  public Characters =this.CharactersSubject.asObservable();;

  public questionCharacters:Character[] =[];

  

  constructor(private http: HttpClient) {
    initializeApp(environment.firebase);
   }


  public getCharactersforGrid(selection:any){
    if(selection == 'Hiragana'){

      this.getHiragana();
      
    }
    else if( selection == 'Katakana'){
      this.getKatakana();
    }
    else if( selection =='Hiragana Dakuten'){
      this.getHiraganaDakuten();
    }
    else if( selection =='Katakana Dakuten'){
      this.getKatakanaDakuten();
    }
    else if( selection =='Contracted Sounds'){
      this.getHiraganacontracted();
    }
    else if( selection =='Double Consonants'){
      console.log("Idk what to do with this");
    }
    /*
    this.getHiragana();
    this.getHiraganacontracted()
    this.getHiraganaDakuten()
    this.getKatakana()
    this.getKatakanaContracted();
    this.getKatakanaDakuten();
    */
}

public getHiragana(){
  const database = getDatabase();
  const hiraganaRef = ref(database,'Hiragana/');
  onValue(hiraganaRef,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject


  })
}

public getHiraganaDakuten(){
  const database = getDatabase();
  const hiraganaDakutenRef = ref(database,'Hiragana Dakuten/');
  onValue(hiraganaDakutenRef,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject

  })
}
public getHiraganacontracted(){
  const database = getDatabase();
  const HiraganacontractedRef = ref(database,'Hiragana contracted/');
  onValue(HiraganacontractedRef,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject

  })
}

public getKatakana(){
  const database = getDatabase();
  const katakanaRef = ref(database,'Katakana/');
  onValue(katakanaRef,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject

  })
}
public getKatakanaContracted(){
  const database = getDatabase();
  const KatakanaContractedref = ref(database,'Katakana Contracted/');
  onValue(KatakanaContractedref,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject

  })
}
public getKatakanaDakuten(){
  const database = getDatabase();
  const KatakanaDakutenref = ref(database,'Katakana Dakuten/');
  onValue(KatakanaDakutenref,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject

  })
}

}
