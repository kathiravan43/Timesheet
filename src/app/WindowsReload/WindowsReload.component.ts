import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-WindowsReload',
  templateUrl: './WindowsReload.component.html',
  styleUrls: ['./WindowsReload.component.css']
})
export class WindowsReloadComponent implements OnInit {

  constructor(private router:Router) {
    setTimeout(() => {
      location.reload();
    }, 1);
  }


    ngOnInit() {
     this.router.navigate(['/userwork'])
    }
  }




