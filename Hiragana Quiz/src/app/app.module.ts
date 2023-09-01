import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { QuestionComponent } from './quiz/question/question.component';
import { NavbarComponent } from './shared/Components/navbar/navbar.component';
import { StudyComponent } from './study/study.component';
import { FooterComponent } from './shared/Components/footer/footer.component';
import { CharacterGridComponent } from './quiz/Components/character-grid/character-grid.component';
import {AngularFireModule} from '@angular/fire/compat';


import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment.development';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { providePerformance,getPerformance } from '@angular/fire/performance';
import { provideRemoteConfig,getRemoteConfig } from '@angular/fire/remote-config';
import { provideStorage,getStorage } from '@angular/fire/storage';



@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    QuestionComponent,
    NavbarComponent,
    StudyComponent,
    FooterComponent,
    CharacterGridComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,

    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    providePerformance(() => getPerformance()),
    provideRemoteConfig(() => getRemoteConfig()),
    provideStorage(() => getStorage()),
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
