import { Component, OnInit } from '@angular/core';
import { DbService } from '../Db.service';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Timesheet } from './Timesheet';

@Component({
  selector: 'app-TimeSheet',
  templateUrl: './TimeSheet.component.html',
  styleUrls: ['./TimeSheet.component.css']
})
export class TimeSheetComponent implements OnInit {
  formValue! : FormGroup;
  currentDate!: any;

  employeeName:any = sessionStorage.getItem('userName');
  employeeEmail:any = sessionStorage.getItem('userEmail');
  constructor(private db:DbService,private formbuilder:FormBuilder) {
    this.currentDate=new Date().toISOString().split('T')[0];;
  }
  formData!:any;
  timesheet: Timesheet = new Timesheet();

  ngOnInit() {
    this.formValue=this.formbuilder.group({
      name:[''],
      email:[''],
      date: ['',Validators.required],
      startTime:new FormControl('', [Validators.required, this.validateTimeRange.bind(this)]),
      endTime:['',Validators.required],
      workDone:['',Validators.required],
      status: 'Pending'
    })
  }

  validateTimeRange(control: FormControl): { [key: string]: any } | null {
    const inputTime = new Date(`2000-01-01 ${control.value}`);
    const minTime = new Date(`2000-01-01 10:00:00`);
    const maxTime = new Date(`2000-01-01 20:00:00`);

    if (inputTime < minTime || inputTime > maxTime) {
      return { invalidTimeRange: true };
    }

    return null;
  }
  postworkDetails(){
    if(this.formValue.valid){
    this. timesheet.name=this.formValue.value.name;
   this. timesheet.email=this.formValue.value.email;
   this.timesheet.date=this.formValue.value.date;
   this. timesheet.startTime=this.formValue.value.startTime;
   this. timesheet.endTime=this.formValue.value.endTime;
   this. timesheet.workDone=this.formValue.value.workDone;
   this.timesheet.status=this.formValue.value.status;
   this.db.updateTimeSheet(this.timesheet)
   .subscribe(res=>{
    console.log(res);
    alert("Work Added Successfully")

    this.formValue.reset();


   })
  }
  else
  {
    alert("get out");
  }
  }

}
