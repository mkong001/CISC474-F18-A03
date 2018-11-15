import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllpostsComponent } from './allposts/allposts.component';
import { LoginComponent } from './login/login.component';
import { ComposeQuestionComponent } from './compose-question/compose-question.component';

const routes: Routes = [
  {
    path: '',
    component: AllpostsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'compose',
    component: ComposeQuestionComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
