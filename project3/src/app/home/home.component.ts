import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth/auth.service';
import { DataService } from '../data.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  questions: object;

  constructor(public auth: AuthService, private data: DataService) { }

  ngOnInit() {
    this.data.getQuestions().subscribe(data => this.questions = data)
  }

}
