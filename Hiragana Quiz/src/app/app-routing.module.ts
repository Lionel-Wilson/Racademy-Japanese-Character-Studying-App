import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { QuestionComponent } from './quiz/question/question.component';
import { StudyComponent } from './study/study.component';

const routes: Routes = [
  {path:'',redirectTo:"Study",pathMatch:"full"},
  {path:"Study",component:StudyComponent},
  {path:"Question",component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
