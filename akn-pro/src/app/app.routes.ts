import { Routes } from '@angular/router';
import {Home} from './home/home';
import {Users} from './users/users';
import {UserDetail} from './user-detail/user-detail';

export const routes: Routes = [
  {path: '',redirectTo: '/home',pathMatch: 'full'},
  {path: 'home', component: Home},
  {path: 'users', component: Users},
  {path: 'users/:id', component: UserDetail},
];
