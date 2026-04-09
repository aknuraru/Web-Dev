
import { Component,OnInit } from '@angular/core';
import { PostService } from '../services/post';
import { Post} from '../models/postn';
import {Router, RouterLink} from '@angular/router';

@Component({
  selector:'app-posts',
  imports:[RouterLink],
  templateUrl:'./posts.html'
})

export class Posts implements OnInit{

  posts:Post[]=[]
  loading=true

  constructor(private postService:PostService){}

  ngOnInit(){
    this.postService.getPosts().subscribe(data=>{
      this.posts=data.slice(0,20)
      this.loading=false
    })
  }

}
