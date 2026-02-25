import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    @for(user of users;track user.id){
      <p>{{user.name}}</p>
    }
  `,
})
export class App {
  users=[{id: 0,name:'Macos'}, {id:1,name:'Windows'},{id:2,name:'Mahs'}]
}
