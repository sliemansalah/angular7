import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styleUrls: ['./server.component.scss'],
})
export class ServerComponent {
    allowNewServer = false;
    serverCreationStatus = 'No server was created!';
    serverName = '';

    constructor() { }

    ngOnInit() { }

    onCreateServer() {
        this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    }
    onUpdateServerName(event: any) {
        this.serverName = (<HTMLInputElement>event.target).value;
        this.serverName.length > 0 ? this.allowNewServer = true : this.allowNewServer = false;
        
    }
}