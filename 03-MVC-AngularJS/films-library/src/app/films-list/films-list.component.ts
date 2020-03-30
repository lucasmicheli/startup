import { Component, OnInit } from '@angular/core';
import { films } from "../films";

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.css']
})
export class FilmsListComponent implements OnInit {

  films = films;

  constructor() { }

  ngOnInit(): void {
  }

}
