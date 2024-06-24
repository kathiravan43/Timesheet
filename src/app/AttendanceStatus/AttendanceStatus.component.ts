import { Component, OnInit } from '@angular/core';
import { DbService } from '../Db.service';

@Component({
  selector: 'app-AttendanceStatus',
  templateUrl: './AttendanceStatus.component.html',
  styleUrls: ['./AttendanceStatus.component.css']
})
export class AttendanceStatusComponent implements OnInit {
  listofLeaves:any="";

  constructor(private db:DbService) {
    this.db.getleaveRequests().subscribe(data=>
      {
        this.listofLeaves=data;
      })

  }

  ngOnInit() {
  }
  updateLeaveRequest(listofLeaves: any, status: string) {
    listofLeaves.status = status;
    this.db.updateLeaveRequest(listofLeaves).subscribe(
      updatedLeaveRequest => {
        console.log('Leave request updated:', updatedLeaveRequest);
        });

  }
}
