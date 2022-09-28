import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {
  display = false;
  count = 0;
  arr = [];
  
  
  constructor() { }
    
  ngOnInit(): void {
  }

  toggle(){
    this.display = !this.display;
    this.arr.push(++this.count);
  }
}
