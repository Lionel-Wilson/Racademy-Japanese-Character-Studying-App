import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './quiz/question/question.component';
import { StudyComponent } from './study/study.component';
import { QuizComponent } from './quiz/quiz.component';

const routes: Routes = [
  {path:'',redirectTo:"Study",pathMatch:"full"},
  {path:"Study",component:StudyComponent},
  {path:"Question",component:QuestionComponent},
  {path:"Quiz",component:QuizComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
