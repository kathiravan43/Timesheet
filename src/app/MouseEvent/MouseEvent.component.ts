import { Component, HostListener, OnInit } from '@angular/core';
import { AuthService } from '../Auth.service';


@Component({
  selector: 'app-MouseEvent',
  templateUrl: './MouseEvent.component.html',
  styleUrls: ['./MouseEvent.component.css']
})
export class MouseEventComponent implements OnInit {

  constructor(private authService: AuthService ) { }

  ngOnInit() {
    this.authService.startInactivityTimer();
  }
  @HostListener('document:mousemove')
  @HostListener('document:keypress')
  onUserActivity() {
   this.authService.resetInactivityTimer();
  }
}
