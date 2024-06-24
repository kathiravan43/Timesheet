import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(
  {
    providedIn: 'root'
  }
)
export class ActiveHoursService {
  public loginTime!: Date;
  public logoutTime!: Date;
  public apiUrl: any = 'http://localhost:3000/Active_Hours';
  public UserName:any="";
constructor(private http: HttpClient) {
  this.UserName=sessionStorage.getItem('userName');
 }
login(): void {
  this.loginTime = new Date();
  console.log(this.loginTime);
}

logout(): void {
  this.logoutTime = new Date();
  this.saveTimesheetData();
  console.log(this.logoutTime);
}

public saveTimesheetData(): void {
  if (this.loginTime && this.logoutTime) {
    const durationInMillis = this.logoutTime.getTime() - this.loginTime.getTime();
    const durationInHours = durationInMillis / (1000 * 60 * 60);

    const timesheetData = {
      loginTime: this.loginTime.toISOString(),
      logoutTime: this.logoutTime.toISOString(),
      duration: durationInHours,
      userName : this.UserName
    };

    this.http.post(this.apiUrl, timesheetData).subscribe(

      (_response) => console.log('Timesheet data saved successfully'),
      (error) => console.error('Error saving timesheet data:', error)
    );
  }
}
   getSavedLoginAndLogout(){
    return   this.http.get(this.apiUrl);
   }
}
