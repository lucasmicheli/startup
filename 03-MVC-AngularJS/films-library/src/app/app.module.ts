import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";

import { FilmService } from './film.service';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FilmDetailsComponent } from './film-details/film-details.component';
import { FilmsListComponent } from './films-list/films-list.component';
import { FavouriteFilmsComponent } from './favourite-films/favourite-films.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    FilmDetailsComponent,
    FilmsListComponent,
    FavouriteFilmsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "", component: FilmsListComponent },
      { path: "films/:filmId", component: FilmDetailsComponent },
      { path: "favourite-films", component: FavouriteFilmsComponent }
    ])
  ],
  providers: [FilmService],
  bootstrap: [AppComponent]
})
export class AppModule { }
