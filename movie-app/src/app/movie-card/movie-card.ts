import { Component,input, output } from '@angular/core';
import {Movie} from '../movie.model';
@Component({
  selector: 'app-movie-card',
  imports: [],
  templateUrl: './movie-card.html',
  styleUrl: './movie-card.css',
})
export class MovieCard {
  movie=input.required<Movie>();
  delete=output<number>();
  remove(){
    this.delete.emit(this.movie().id);
  }
  upvote(){
    this.movie().votes++;
  }
}
