import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import {Username} from '../models/user';
@Injectable({
  providedIn: 'root',
})
export class User {
  private api="https://jsonplaceholder.typicode.com";
  constructor(private http: HttpClient) { }
  getUsers():Observable<Username[]>{
    return this.http.get<Username[]>(`${this.api}/users`);
  }
  getUser(id:number):Observable<Username>{
    return this.http.get<Username>(`${this.api}/users/${id}`);
  }
}
