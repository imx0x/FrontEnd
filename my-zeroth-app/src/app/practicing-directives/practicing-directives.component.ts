import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practicing-directives',
  templateUrl: './practicing-directives.component.html',
  styleUrls: ['./practicing-directives.component.css'],
  styles:[`.longthok{
    color:white;
  }`]

})
export class PracticingDirectivesComponent implements OnInit {

  secretPassword:string="tuna";
  toggle=0;
  passwordList:string[];
  l=0;

  constructor() { 

    this.passwordList=[];
  }

  ngOnInit(): void {
  }
  updateSecretPassword():String{
    if(this.toggle===0){
      this.secretPassword="natalie";
      this.toggle=1; 
    } else{
      this.secretPassword="tuna";
      this.toggle=0; 
    }
    this.passwordList.push(this.secretPassword);
     console.log(this.passwordList[this.l++]);
     return this.secretPassword;
  }

  getColor():String{
        return this.secretPassword.length%2==0 ? 'red' :'green';
      }

}
