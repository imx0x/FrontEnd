import { Component, OnInit } from '@angular/core';


export interface DummyResponse{
  biscuit:string;
  chai:string;
  namkeen:string;
}
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
  dummyResponse:DummyResponse[]=[];
  biscuitName:string;
  constructor() { 
    setTimeout(()=>{
      this.allowNewServer=true;
    },2000);

    if(this.serverName.length>0) this.isSeverNameEmpty=false;
    for(var i=0;i<3;i++){
    let dummyvalues={
      biscuit:"Marie Gold"+i,
      chai:"Bagh Bakri"+i,
      namkeen:"aloo bhujia"+i
    }
    this.dummyResponse.push(dummyvalues);
  }
    
  }

  ngOnInit(): void {
  }

  dummyTablepopulate(biscuit:string){
    this.biscuitName=biscuit;
    // this.snackbar.open(this.biscuitName,'HELLO BELLo', {
    //   duration:1000
    // });
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
