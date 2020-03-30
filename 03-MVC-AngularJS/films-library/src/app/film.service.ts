import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class FilmService {

  favourites = [];

  constructor(private http: HttpClient) { }

  addFavourite(film) {
    this.favourites.push(film);
    localStorage.setItem("films", JSON.stringify(this.favourites));
  }

  removeFavourite(film) {
    let index = -1;

    for (let i = 0; i < this.favourites.length; i++) {
      if (film.title === this.favourites[i].title) {
        index = i;
      }
    }
    if (index !== -1) this.favourites.splice(index, 1);
    localStorage.setItem("films", JSON.stringify(this.favourites));
  }

  getFilms() {
    return this.favourites;
  }

  clearFavourite() {
    this.favourites = [];
    return this.favourites;
  }
}
