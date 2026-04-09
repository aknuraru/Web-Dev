import { Component} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Movie} from './movie.model';
import {MovieCard} from './movie-card/movie-card';

@Component({
  selector: 'app-root',
  imports: [FormsModule, MovieCard],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  movies:Movie[]=[
    {id:1,title:"roman",year:2020,isWatched:true,votes:0},
    {id:2,title:"roman",year:2020,isWatched:false,votes:0},
    {id:3,title:"classic",year:2021,isWatched:true,votes:0},
    {id:4,title:"roman",year:2022,isWatched:true,votes:0},
    {id:5,title:"roman",year:2023,isWatched:false,votes:0},
  ];
  deleteProduct(id:number){
    this.movies=this.movies.filter(movie=>movie.id!==id);
  }
}
