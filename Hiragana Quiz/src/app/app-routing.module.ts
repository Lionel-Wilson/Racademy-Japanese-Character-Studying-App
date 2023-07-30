import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './quiz/welcome/welcome.component';
import { QuestionComponent } from './quiz/question/question.component';

const routes: Routes = [
  {path:'',redirectTo:"Welcome",pathMatch:"full"},
  {path:"Welcome",component:WelcomeComponent},
  {path:"Question",component:QuestionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
