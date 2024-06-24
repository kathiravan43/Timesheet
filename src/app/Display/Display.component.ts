import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Display',
  templateUrl: './Display.component.html',
  styleUrls: ['./Display.component.css']
})
export class DisplayComponent implements OnInit {
  public showContent: boolean = false;
  Center:any="center";
  constructor() { }

  ngOnInit() {
    this.startTimer();
  }
  startTimer() {
    setTimeout(() => {
      this.showContent = false;
    }, 1* 60 * 1000);
  }
}
