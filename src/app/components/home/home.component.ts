import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  showNewStudentPasswordDialog = false;

  constructor() { }

  ngOnInit() {
  }

}
