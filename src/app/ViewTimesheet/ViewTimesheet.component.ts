import { Component, OnInit } from '@angular/core';
import { DbService } from '../Db.service';

@Component({
  selector: 'app-ViewTimesheet',
  templateUrl: './ViewTimesheet.component.html',
  styleUrls: ['./ViewTimesheet.component.css']
})
export class ViewTimesheetComponent implements OnInit {
timesheet:any='';
  constructor(private db:DbService) {
    this.db.getTimesheet().subscribe(data=>{
      this.timesheet=data;
    })
  }

  ngOnInit() {
  }
  updateLeaveRequest(listofwork: any, status: string) {
    listofwork.status = status;
    this.db.viewTheWork (listofwork).subscribe(
      updatedLeaveRequest => {
        console.log('work request updated:', updatedLeaveRequest);
        });

  }

}
