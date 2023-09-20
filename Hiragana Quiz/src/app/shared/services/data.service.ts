import { AngularFireModule } from '@angular/fire/compat';
import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/character';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject,Observable } from 'rxjs';
import { getDatabase, ref, onValue,  } from "firebase/database";
import { initializeApp } from 'firebase/app'; // Import initializeApp
import { DoubleConsonants } from '../Interfaces/double-consonants';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private CharactersSubject = new BehaviorSubject<Character[]>([]);
  public Characters =this.CharactersSubject.asObservable();

  public questionCharacters:Character[] =[];

  private DoubleConsonantsSubject = new BehaviorSubject<DoubleConsonants[]>([]);
  public DoubleConsonantsWords =this.DoubleConsonantsSubject.asObservable();;

  public doubleConsonantsQuestions:DoubleConsonants[] =[];
  public doubleConsonantsSelected:boolean=false;


  private LoadingSubject = new BehaviorSubject<boolean>(true);
  public isLoading$ =this.LoadingSubject.asObservable();

  

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
      this.getDoubleConsonants();
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
    console.log(data);
    this.LoadingSubject.next(false);



  })
}

public getHiraganaDakuten(){
  const database = getDatabase();
  const hiraganaDakutenRef = ref(database,'Hiragana Dakuten/');
  onValue(hiraganaDakutenRef,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject
    this.LoadingSubject.next(false);

  })
}
public getHiraganacontracted(){
  const database = getDatabase();
  const HiraganacontractedRef = ref(database,'Hiragana contracted/');
  onValue(HiraganacontractedRef,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject
    this.LoadingSubject.next(false);

  })
}

public getKatakana(){
  const database = getDatabase();
  const katakanaRef = ref(database,'Katakana/');
  onValue(katakanaRef,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject
    this.LoadingSubject.next(false);

  })
}
public getKatakanaContracted(){
  const database = getDatabase();
  const KatakanaContractedref = ref(database,'Katakana Contracted/');
  onValue(KatakanaContractedref,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject
    this.LoadingSubject.next(false);

  })
}
public getKatakanaDakuten(){
  const database = getDatabase();
  const KatakanaDakutenref = ref(database,'Katakana Dakuten/');
  onValue(KatakanaDakutenref,(snapshot)=>{
    const data = snapshot.val();
    this.CharactersSubject.next(data); // Update the subject
    this.LoadingSubject.next(false);

  })
}
public getDoubleConsonants(){
  this.doubleConsonantsSelected =true;
  const database = getDatabase();
  const DoubleConsonantsref = ref(database,'Double Consonants/');
  onValue(DoubleConsonantsref,(snapshot)=>{
    const data = snapshot.val();
    this.DoubleConsonantsSubject.next(data); // Update the subject
    console.log(data);
    this.LoadingSubject.next(false);


  })
}

}
