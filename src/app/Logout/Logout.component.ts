import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ActiveHoursService } from '../ActiveHours.service';
@Component({
  selector: 'app-Logout',
  templateUrl: './Logout.component.html',
  styleUrls: ['./Logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router:Router,private activedb:ActiveHoursService) {
    setTimeout(() => {
      location.reload();
    }, 100);
  }

  ngOnInit() {
    this.logoutAll();
  }
  logoutAll(){
    sessionStorage.removeItem ('userEmail');
    sessionStorage.removeItem ('userName');
    sessionStorage.removeItem ('department');
    sessionStorage.removeItem ('dateofbirth');
    sessionStorage.removeItem ('adminEmail');
    sessionStorage.removeItem ('adminName');

    this.router.navigate(['/login']);
    this.activedb.logout();

  }

}
