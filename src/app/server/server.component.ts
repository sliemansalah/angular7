import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
    constructor() { 
    }
    button_clicks=[];
    display:boolean=false;
    ngOnInit() { }
    displayDetails(){
        this.button_clicks.push(this.button_clicks.length+5);
        this.display=!this.display;
    }
}