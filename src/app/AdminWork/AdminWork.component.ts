import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AdminWork',
  templateUrl: './AdminWork.component.html',
  styleUrls: ['./AdminWork.component.css']
})
export class AdminWorkComponent implements OnInit {
  adminemail:any= sessionStorage.getItem('adminEmail');
  adminName:any= sessionStorage.getItem('adminName');
  constructor(private rout:Router) {
    if(this.adminName && this.adminemail){

    }
    else{
      this.rout.navigate(['/login'])
    }

   }

  ngOnInit() {
  }

}
