import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth.service';
import { Route, Router } from '@angular/router';
import { Location } from '@angular/common';



@Component({
  selector: 'app-usersidenavbar',
  templateUrl: './usersidenavbar.component.html',
  styleUrls: ['./usersidenavbar.component.css']
})
export class UsersidenavbarComponent implements OnInit {

  constructor(public auth: AuthService,private router:Router,private location: Location) {

  }


  ngOnInit() {
  }

}
