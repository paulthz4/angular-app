import { Component } from "@angular/core";

@Component({
  templateUrl: './form.component.html',
  selector: 'app-form',
})
export class FormComponent{
  username = '';
  emptyUsername = this.username.length === 0;
  
  getUsername(){
    return this.username;
  }
  
  reset(){
    this.username = '';
  }
  
  inputChange(){
    this.emptyUsername = this.username.length === 0;
  }
}