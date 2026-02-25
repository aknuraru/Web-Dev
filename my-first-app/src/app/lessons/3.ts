import {Component} from '@angular/core';
@Component({
    selector:'app-user',
    template:`Username: {{ username }}`,
})
export class User{
    username='Aknur';
}
@Component({
    selector:'app-root',
    template: `
        <section><app-user /></section>
    `,
    imports: [User],
})
export class App{}