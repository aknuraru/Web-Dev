import {Component} from '@angular/core';
@Component({
    selector:'app-root',
    template: `
        <button (click)="showSecretMessage()">click here</button>
    `,
})
export class App{
    showSecretMessage(){
        alert("hello");
    }
}