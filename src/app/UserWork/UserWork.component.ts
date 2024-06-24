import { Component, OnInit } from '@angular/core';
import { ActiveHoursService } from '../ActiveHours.service';

@Component({
  selector: 'app-UserWork',
  templateUrl: './UserWork.component.html',
  styleUrls: ['./UserWork.component.css']
})
export class UserWorkComponent implements OnInit {
  userName!: any;
  currentTime: Date | undefined;


  quotes: string[] = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill"
  ];
  randomQuote: string="";
  displayGreeting: boolean = true;
  constructor(private activedb:ActiveHoursService) {
    this.userName=sessionStorage.getItem('userName');
    this.currentTime=new Date();
    this.randomQuote = this.quotes[Math.floor(Math.random() * this.quotes.length)];
    this.activedb.login();
    console.log(this.activedb.login());

  }

  ngOnInit() {


  }
  closeGreeting(){
    this.displayGreeting = false;
  }

}
