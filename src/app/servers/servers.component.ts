import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<app-server></app-server><h3>Hi man</h3><p>Thank you.</p>',
  styles: ['p{color:red;font-size:16px;}']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
