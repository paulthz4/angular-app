import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  oddNums: number[] = [];
  evenNums: number[] = [];
  
  onIntervalFired(eventNum: number){
    if(eventNum % 2 === 0)
      this.evenNums.push(eventNum);
    else{
      this.oddNums.push(eventNum);
    }
  }
}
