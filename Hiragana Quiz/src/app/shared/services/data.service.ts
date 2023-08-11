import { AngularFireModule } from '@angular/fire/compat';
import { Injectable } from '@angular/core';
import { Quizitem } from '../Interfaces/quizitem';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject,Observable } from 'rxjs';
import { getDatabase, ref, onValue,  } from "firebase/database";
import { initializeApp } from 'firebase/app'; // Import initializeApp

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private quizDataSubject = new BehaviorSubject<[Quizitem[]]>([[]]);
  public QuizData$ = this.quizDataSubject.asObservable();

  

  constructor(private http: HttpClient) {
    initializeApp(environment.firebase);
   }


  public getCharactersforGrid(){
    this.http.get<[Quizitem[]]>(environment.QuizApiUrl).subscribe((results => {
      this.quizDataSubject.next(results);

    }))

    this.getHiragana();
    this.getHiraganacontracted()
    this.getHiraganaDakuten()
    this.getKatakana()
    this.getKatakanaContracted();
    this.getKatakanaDakuten();
}

public getHiragana(){
  const database = getDatabase();
  const hiraganaRef = ref(database,'Hiragana/');
  onValue(hiraganaRef,(snapshot)=>{
    const data = snapshot.val();
    console.log(data);
  })
}

public getHiraganaDakuten(){
  const database = getDatabase();
  const hiraganaDakutenRef = ref(database,'Hiragana Dakuten/');
  onValue(hiraganaDakutenRef,(snapshot)=>{
    const data = snapshot.val();
    console.log(data);
  })
}
public getHiraganacontracted(){
  const database = getDatabase();
  const HiraganacontractedRef = ref(database,'Hiragana contracted/');
  onValue(HiraganacontractedRef,(snapshot)=>{
    const data = snapshot.val();
    console.log(data);
  })
}

public getKatakana(){
  const database = getDatabase();
  const katakanaRef = ref(database,'Katakana/');
  onValue(katakanaRef,(snapshot)=>{
    const data = snapshot.val();
    console.log(data);
  })
}
public getKatakanaContracted(){
  const database = getDatabase();
  const KatakanaContractedref = ref(database,'Katakana Contracted/');
  onValue(KatakanaContractedref,(snapshot)=>{
    const data = snapshot.val();
    console.log(data);
  })
}
public getKatakanaDakuten(){
  const database = getDatabase();
  const KatakanaDakutenref = ref(database,'Katakana Dakuten/');
  onValue(KatakanaDakutenref,(snapshot)=>{
    const data = snapshot.val();
    console.log(data);
  })
}

}
