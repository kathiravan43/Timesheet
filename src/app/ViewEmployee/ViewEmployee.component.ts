import { Component, OnInit } from '@angular/core';
import { DbService } from '../Db.service';




@Component({
  selector: 'app-ViewEmployee',
  templateUrl: './ViewEmployee.component.html',
  styleUrls: ['./ViewEmployee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  listOfEmployees:any="";

  constructor(private db:DbService) {
    this.db.getdata().subscribe(data=>{
      this.listOfEmployees=data;
    })
   }

  ngOnInit() {
  }

}
