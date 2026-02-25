import {Component,output} from '@angular/core';
@Component({
    selector:'app-child',
    styles: `
        .btn{
        padding:5px;
    }
    `,
    template:`
        <button class="btn" (click)="addItem()">Add item</button>
    `,
})
export class Child{
    readonly additemev=output<string>();
    addItem(){
        this.additemev.emit('turtle');
    }
}