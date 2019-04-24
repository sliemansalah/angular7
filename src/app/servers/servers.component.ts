import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverName='Testserver';
  allowNewServer=false;
  serverCreated=false;
  serverCreationStatus='No server was created!';
  constructor() { 
    setInterval(() => {
      this.serverCreated=false;
    }, 5000);
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated=true;
    this.serverCreationStatus='Server was created! Name is' + this.serverName;
  }
  onUpdateServerName(event:Event){
    this.serverName=(<HTMLInputElement>event.target).value;
  }

}
