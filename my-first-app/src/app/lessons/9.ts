import {Component,input} from '@angular/core';
@Component({
    selector:'app-user',
    standalone: true,
    template:`
        <p>The user name is {{name()}}</p>
    `,
})
export class User {
    readonly name=input<string>();
}
@Component({
    selector:'app-root',
    standalone: true,
    template:` <section><app-user [name]="'Ryskul'"></app-user></section>`,
    imports:[User],
})
export class App{}
