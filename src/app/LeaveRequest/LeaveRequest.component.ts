import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LeaveApplicationService } from '../LeaveApplication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-LeaveRequest',
  templateUrl: './LeaveRequest.component.html',
  styleUrls: ['./LeaveRequest.component.css']
})
export class LeaveRequestComponent implements OnInit {
  leaveForm! : FormGroup;
  daysDiff:any="";
  minDate: string="";
  constructor(private formsBulider : FormBuilder,private http : HttpClient, private router:Router ) {
    const today = new Date();
    this.minDate = today.toISOString().split('T')[0];
  }
  employeeName:any = sessionStorage.getItem('userName');
  employeeEmail:any = sessionStorage.getItem('userEmail');
  myLeave:any= "";
  data:any="";

  ngOnInit() {
    this.leaveForm = this.formsBulider.group({
      name:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      fromDate:['',Validators.required],
      toDate:['',Validators.required],
      hours:['',Validators.required],
      value:['',Validators.required],
      status: 'Pending'


    })

  }
  applyLeave(){
    if(!this.leaveForm.valid){
   alert('fill all the fileds');
  }
  else{
    console.log(this.leaveForm.value)
    this.http.post<any>(environment.leaveFormUrl,this.leaveForm.value)
    .subscribe((res: any)=>{
      alert("Leave Applied Please Wait for the Admin Approval");

      this.leaveForm.reset();
       this.router.navigate(['/myleave']);


    })


  }
      }
      calculateDays(): void {
        if (this.leaveForm.value.fromDate && this.leaveForm.value.toDate) {
          const timeDiff = new Date(this.leaveForm.value.toDate).getTime() - new Date(this.leaveForm.value.fromDate).getTime();
          this.daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
        }
      }




}
