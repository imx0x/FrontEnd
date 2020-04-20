import { Component } from '@angular/core';


@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`
     .online{
         color:yellow;
         text-aline:'center'
     }
    `]
})
export class ServerComponent{
    serverId:number = 10;
    serverStatus:string = 'offline';
    flag:number=1;
    getServerStatus():string{
        let value= "offline";
        if(this.flag==2)value = 'online'; 
        return value;
    }

    getColor():String{
        return this.serverStatus==='offline' ? 'red' :'green';
      }
      updateServerStatus():void{
          if(this.flag===2){
          this.serverStatus='offline';
          this.flag=1;
        }
        else{
            this.serverStatus='online';
            this.flag=2;
        }
      }
}