import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { MypostsComponent } from './myposts/myposts.component';
import { LoginComponent } from './login/login.component';
import { ComposeQuestionComponent } from './compose-question/compose-question.component';

@NgModule({
  declarations: [
    AppComponent,
    AllpostsComponent,
    MypostsComponent,
    LoginComponent,
    ComposeQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
