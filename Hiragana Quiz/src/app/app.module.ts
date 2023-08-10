import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizComponent } from './quiz/quiz.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { WelcomeComponent } from './quiz/welcome/welcome.component';
import { QuestionComponent } from './quiz/question/question.component';
import { NavbarComponent } from './shared/Components/navbar/navbar.component';
import { StudyComponent } from './study/study.component';
import { FooterComponent } from './shared/Components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    QuizComponent,
    WelcomeComponent,
    QuestionComponent,
    NavbarComponent,
    StudyComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
