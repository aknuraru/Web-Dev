import {Component} from '@angular/core';
@Component({
    selector:'app-root',
    template: `
        <section (mouseover)="showSecretMessage()">the message to show:{{message}}</section>
    `,
})
export class App{
    message='';
    showSecretMessage(){
        this.message='Way to go';
    }
}