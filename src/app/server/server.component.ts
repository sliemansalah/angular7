import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
    constructor() { 
    }
    log=[];
    showSecret:boolean=false;
    ngOnInit() { }
    onToggleDetails(){
        this.showSecret=!this.showSecret;
        this.log.push(new Date());
    }
}