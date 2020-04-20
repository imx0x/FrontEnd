import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer:boolean = false;
  serverCreationStatus = "Server Not Started";
  serverName = '';
  isSeverNameEmpty:boolean=true;
  statusColor:String='';
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);

    if(this.serverName.length>0) this.isSeverNameEmpty=false;
  }

  ngOnInit(): void {
  }

  onCreateServer(param:string):void{
    console.log(param);
    this.serverCreationStatus = "server started";
  }

  onUpdateServerName(event : Event){
     console.log(event);
     this.serverName = (<HTMLInputElement>event.target).value;
     if(this.serverName.length!=0){
      this.isSeverNameEmpty=true;
     }
  }
  checkIfServerNameEmpty(){
    this.serverName="";
    this.isSeverNameEmpty=false;
  }

  getColor():String{
    return this.serverName.length==0 ? 'red' :'green';
  }
}
