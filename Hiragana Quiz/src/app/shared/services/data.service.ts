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
  private charactersSubject = new BehaviorSubject<Character[]>([]);
  public characters$ = this.charactersSubject.asObservable();

  public questionCharacters: Character[] = [];

  private doubleConsonantsSubject = new BehaviorSubject<DoubleConsonants[]>([]);
  public doubleConsonantsWords$ = this.doubleConsonantsSubject.asObservable();

  public doubleConsonantsQuestions: DoubleConsonants[] = [];
  public doubleConsonantsSelected = false;

  private loadingSubject = new BehaviorSubject<boolean>(true);
  public isLoading$ = this.loadingSubject.asObservable();

  public muteEnabled = false;

  constructor(private http: HttpClient) {
    initializeApp(environment.firebase);
  }

  setMuteState(value: boolean) {
    this.muteEnabled = value;
  }

  getMuteState() {
    return this.muteEnabled;
  }



  private fetchDataFromDatabase(path: string) {
    const database = getDatabase();
    const dataRef = ref(database, path);
    if(path == 'Double Consonants/'){
      const database = getDatabase();
      const DoubleConsonantsref = ref(database,'Double Consonants/');
      onValue(DoubleConsonantsref,(snapshot)=>{
        const data = snapshot.val();
        this.doubleConsonantsSubject.next(data); 
        this.loadingSubject.next(false);
        localStorage.setItem(path, JSON.stringify(data));

      })
    }
    else{
      onValue(dataRef, (snapshot) => {
        const data = snapshot.val();
        this.charactersSubject.next(data);
        this.loadingSubject.next(false);
        // Store data in local storage
        localStorage.setItem(path, JSON.stringify(data));
      });
    }

  }

  private getDataFromLocalStorage(path: string) {
    const data = localStorage.getItem(path);
    return data ? JSON.parse(data) : null;
  }

  public getCharactersforGrid(selection: string) {
    const cachedData = this.getDataFromLocalStorage(selection);

    if (cachedData) {
      // Data found in local storage, use it
      this.charactersSubject.next(cachedData);
      this.loadingSubject.next(false);
    } else {

      // Data not found in local storage, fetch from the database
      if (selection == 'Hiragana') {
        this.getHiragana();
      } else if (selection == 'Katakana') {
        this.getKatakana();
      } else if (selection == 'Hiragana Dakuten') {
        this.getHiraganaDakuten();
      } else if (selection == 'Katakana Dakuten') {
        this.getKatakanaDakuten();
      } else if (selection == 'Contracted Sounds') {
        this.getHiraganacontracted();
      } else if (selection == 'Double Consonants') {
        this.getDoubleConsonants();
      }
    }
  }

public getHiragana() {
  this.fetchDataFromDatabase('Hiragana/');
}

public getHiraganaDakuten() {
  this.fetchDataFromDatabase('Hiragana Dakuten/');
}

public getHiraganacontracted() {
  this.fetchDataFromDatabase('Hiragana contracted/');
}

public getKatakana() {
  this.fetchDataFromDatabase('Katakana/');
}

public getKatakanaContracted() {
  this.fetchDataFromDatabase('Katakana Contracted/');
}

public getKatakanaDakuten() {
  this.fetchDataFromDatabase('Katakana Dakuten/');
}

public getDoubleConsonants() {
  this.doubleConsonantsSelected = true;
  this.fetchDataFromDatabase('Double Consonants/');
}


}
