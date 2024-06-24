import { Component, OnInit } from '@angular/core';
import { DbService } from '../Db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-MyWorkDone',
  templateUrl: './MyWorkDone.component.html',
  styleUrls: ['./MyWorkDone.component.css']
})
export class MyWorkDoneComponent implements OnInit {
  myWorkDone!:any;
  employeeName: any= sessionStorage.getItem('userName');
  constructor(private db: DbService, private router:Router) {

  }

  ngOnInit() {
    this.getMyWorkDone();
  }
  getMyWorkDone(){
    this.db.getWorkDone(this.employeeName).subscribe(data=>{
      this.myWorkDone=data;
      console.log("myworkdone", data);
      if ( this.employeeName==null){
            if(this.myWorkDone== null){
              alert('There is No Work done By You :'+this.employeeName);
              /* window.location.reload(); */
            }
        this.router.navigate(['/login']);
      }

    })
  }
}
