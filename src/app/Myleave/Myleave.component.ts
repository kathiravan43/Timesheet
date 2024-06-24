import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LeaveApplicationService } from '../LeaveApplication.service';
import { DbService } from '../Db.service';

@Component({
  selector: 'app-Myleave',
  templateUrl: './Myleave.component.html',
  styleUrls: ['./Myleave.component.css']
})
export class MyleaveComponent implements OnInit {
  myLeave: any="";
  employeeName: any= sessionStorage.getItem('userName');
  constructor(private db: DbService) { }

  ngOnInit() {
    this.getEmployeeLeaves();
  }
  getEmployeeLeaves() {
  this.db.getEmployeeLeaves(this.employeeName).subscribe(data=>{
    this.myLeave=data;
  })



  }


}
