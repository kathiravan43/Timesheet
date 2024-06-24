import { Component, OnInit } from '@angular/core';
import { DbService } from '../Db.service';

@Component({
  selector: 'app-ViewAssignedTask',
  templateUrl: './ViewAssignedTask.component.html',
  styleUrls: ['./ViewAssignedTask.component.css']
})
export class ViewAssignedTaskComponent implements OnInit {
  assignedTask :any="";
  constructor(private db:DbService) { }

  ngOnInit() {
    this. getAssignedTaskStatus();
  }
  getAssignedTaskStatus(){
    this.db.getAssignTask().subscribe((data)=>{
      console.log("assigned task data",data);
      this.assignedTask=data;

  })
  }
}
