import { Component,OnInit } from '@angular/core';
import {RouterLink} from '@angular/router';
import {Username} from '../models/user';
import {User} from '../services/user';
@Component({
  selector: 'app-users',
  imports: [RouterLink],
  templateUrl: './users.html',
  styleUrl: './users.css',
  standalone: true,
})
export class Users implements OnInit {
  users: Username[]=[];
  loading=true;
  constructor(private userSer:User){}
  ngOnInit() {
    this.userSer.getUsers().subscribe(data=>{
      this.users = data;
      this.loading=false;
    })
  }
}
