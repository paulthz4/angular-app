import { Injectable } from "@angular/core";

@Injectable()
export class CounterService{
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;
  
  incrementActiveToInactive(){
    this.activeToInactiveCounter++;
    console.log('active to inactive: '+this.activeToInactiveCounter);
  }
  
  incrementInActiveToActive(){
    this.inactiveToActiveCounter++;
    console.log('inactive to active: '+this.inactiveToActiveCounter);
  }
}