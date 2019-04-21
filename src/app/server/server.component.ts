import { Component } from '@angular/core';

@Component({
selector:'app-server',
templateUrl:'./server.component.html',
styleUrls:['./server.component.scss'],
})
export class ServerComponent{
allowNewServer = false;
serverCreationStatus = 'No server was created!';
serverName = '';
constructor() {
setTimeout(() => {
    this.allowNewServer = true;
}, 2000);
}
ngOnInit() {

}
onCreateServer() {
    this.serverCreationStatus = 'Server was created';
}
// onUpdateServerName(event:any) {
//     this.serverName = (<HTMLInputElement>event.target).value;
// }
}