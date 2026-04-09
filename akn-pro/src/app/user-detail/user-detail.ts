import { Component,OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import {User} from '../services/user';
import {Username} from '../models/user';

@Component({
  selector: 'app-user-detail',
  imports: [],
  templateUrl: './user-detail.html',
  styleUrl: './user-detail.css',
})
export class UserDetail implements OnInit {
    user!: Username;
    loading= true;
    constructor(
      private router: Router,
      private route: ActivatedRoute,
      private serv:User,

    ){}
    ngOnInit() {
      const id=Number(this.route.snapshot.paramMap.get('id'));
      this.serv.getUser(id).subscribe(data => {
        this.user = data
        this.loading = false
      })
    }
    goBack(){
      void this.router.navigate(['/users']);
    }
}
