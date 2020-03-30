import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';

@Component({
  selector: 'app-favourite-films',
  templateUrl: './favourite-films.component.html',
  styleUrls: ['./favourite-films.component.css']
})
export class FavouriteFilmsComponent implements OnInit {

  favouriteFilms;

  constructor(private filmService:FilmService) { }

  ngOnInit(): void {
    this.favouriteFilms = this.filmService.getFilms();
    this.favouriteFilms = JSON.parse(localStorage.getItem("films"));
  }

  removeFavourite(film) {
    this.filmService.removeFavourite(film);
  }

  getFilms() {
    this.favouriteFilms = JSON.parse(localStorage.getItem("films"));
  }

}
