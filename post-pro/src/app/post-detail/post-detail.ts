import { Component,OnInit } from '@angular/core';
import {ActivatedRoute, RouterLink} from '@angular/router';
import { PostService } from '../services/post';
import { Post } from '../models/postn';

@Component({
  selector:'app-post-detail',
  templateUrl:'./post-detail.html',
  imports:[RouterLink],
})

export class PostDetail implements OnInit{

  post!:Post

  constructor(
    private route:ActivatedRoute,
    private postService:PostService
  ){}

  ngOnInit(){
    const id=Number(this.route.snapshot.paramMap.get('id'))

    this.postService.getPost(id).subscribe(data=>{
      this.post=data
    })
  }

}
