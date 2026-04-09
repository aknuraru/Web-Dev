import { Routes } from '@angular/router';
import {Home} from './home/home'
import { Posts } from './posts/posts';
import { PostDetail} from './post-detail/post-detail';

export const routes: Routes = [
  {path:"home",component:Home},
  {path:"posts",component:Posts},
  {path:"posts/:id",component:PostDetail},
  {path:"",redirectTo:"/home",pathMatch:"full"}
];


