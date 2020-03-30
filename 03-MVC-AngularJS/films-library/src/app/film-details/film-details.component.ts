import { Component, OnInit } from '@angular/core';
import { FilmService } from '../film.service';
import { films } from "../films";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-film-details',
  templateUrl: './film-details.component.html',
  styleUrls: ['./film-details.component.css']
})
export class FilmDetailsComponent implements OnInit {

  film;

  constructor(
    private route: ActivatedRoute,
    private filmService: FilmService
    ) { }

  ngOnInit(): void {

    this.route.paramMap.subscribe(params => {
      this.film = films[+params.get("filmId")];
    });
  }

  addFavourite(film) {
    this.filmService.addFavourite(film);
  }
}

