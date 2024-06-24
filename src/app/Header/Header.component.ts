import { Component, OnInit } from '@angular/core';
import { DbService } from '../Db.service';
import { AuthService } from '../Auth.service';

@Component({
  selector: 'app-Header',
  templateUrl: './Header.component.html',
  styleUrls: ['./Header.component.css']
})
export class HeaderComponent implements OnInit {
  loggedIn: boolean = false;
  public User :any = sessionStorage.getItem('userEmail');
  public userName :any = sessionStorage.getItem('userName');
  public name:any="";
  constructor(public authService: AuthService) {}

  ngOnInit() {
    if(this.userName!=null || undefined){
      this.name=this.userName;
    }
  }
}
