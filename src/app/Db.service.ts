import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pipe } from 'rxjs/internal/util/pipe';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DbService {
 public url:any = "http://localhost:3000/signupUsers";
 public leaveUrl :any = " http://localhost:3000/leaveForms";
 public timeSheetUrl:any = " http://localhost:3000/Timesheet";
 public baseUrl:any="http://localhost:3000/AssignedTask";
 private apiUrl = 'http://localhost:3000/signupUsers';
  constructor(private http:HttpClient) { }
  getdata(){
    return this.http.get(this.url)
  }
  addEmployee(body:any){
    return this.http.post(this.url,body);
  }
  getByCode(code:any){
    return this.http.get(this.url+'/'+code);
  }
  deleteEmployees(fullName: any){
    return this.http.delete<any>("http://localhost:3000/signupUsers/"+fullName)
  }
  updateEmployee(id:any,data:any){
    return this.http.put(this.url+"/"+id,data);
  }
  oneuser(name:any){
    const MyprofileUrl=`http://localhost:3000/signupUsers?fullName=${name}`;
    return this.http.get( MyprofileUrl);
  }
  loggedIn(){
    return !! localStorage.getItem('token')
  }
  logoutUser(){
    localStorage.removeItem('token')
  }
  getleaveRequests(){
    return this.http.get(this.leaveUrl);
  }
  updateTimeSheet(data:any):Observable <any>{
    return this.http.post(this.timeSheetUrl, data);

  }
  getEmployeeLeaves(name: String) {
    const url5 = `http://localhost:3000/leaveForms?name=${name}`;
    return this.http.get(url5);
  }
  updateLeaveRequest(leaveRequest:any)  {
    const urlStatus = `${this.leaveUrl}/${leaveRequest.id}`;
    return this.http.put<any>(urlStatus, leaveRequest);
  }
  updateMyTask(MyTask:any)  {
    const urlStatus = `${this.baseUrl}/${MyTask.id}`;
    return this.http.put<any>(urlStatus, MyTask);
  }
  viewTheWork(timesheet:any)  {
    const urlStatus = `${this.timeSheetUrl}/${timesheet.id}`;
    return this.http.put<any>(urlStatus, timesheet);
  }
  getMessageFromAdmin(){
    return this.http.get("http://localhost:3000/notification");
  }

  assignTask(task: any) {
    return this.http.post(this.baseUrl, task);
  }
  getAssignTask(){
    return this.http.get(this.baseUrl);
  }
  getTasksForEmployee(assignee: string) {
    const taskUrl=`http://localhost:3000/AssignedTask?assignee=${assignee}`;
    console.log(assignee);
    return this.http.get(taskUrl);
  }
  getTimesheet(){
    return this.http.get(this.timeSheetUrl);
  }
  getWorkDone(name:any){
    const workDoneUrl = `http://localhost:3000/Timesheet?name=${name}`;
    return this.http.get(workDoneUrl);
  }
  addEmployee1(employee: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, employee);
  }


  }
