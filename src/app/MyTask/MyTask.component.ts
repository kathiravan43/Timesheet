import { Component, OnInit } from '@angular/core';
import { DbService } from '../Db.service';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';

@Component({
  selector: 'app-MyTask',
  templateUrl: './MyTask.component.html',
  styleUrls: ['./MyTask.component.css']
})
export class MyTaskComponent implements OnInit {
  tasks!: any;
  employeeName: any= sessionStorage.getItem('userName');
  constructor(private db:DbService ,private sanitizer: DomSanitizer,private rout:Router) { }

  ngOnInit() {
    if(this.employeeName){

    }
    else{

      this.rout.navigate(['/login']);
    }
    this.getTask();

   }


  getTask(){
  this.db.getTasksForEmployee(this.employeeName)
    .subscribe(
      tasks => {
        this.tasks = tasks;

      },
      error => {
       alert("Error in getting your task");
      }
    );
    }
    myTask(){
      if(!this.tasks){
        alert('Plese wait for the task to be assigned');
      }
    }
    updateLeaveRequest(listofLeaves: any, status: string) {
      listofLeaves.status = status;
      this.db.updateMyTask(listofLeaves).subscribe(
        updatedLeaveRequest => {
          console.log('Leave request updated:', updatedLeaveRequest);
          });

    }
}
