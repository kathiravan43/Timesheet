import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './Logout/Logout.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


constructor(private router:Router, private http:HttpClient) {  }
private apiUrl = 'http://localhost:3000/Timesheet';
 private readonly inactivityTimeout = 300000;
private timeoutId: any;
public userName:any= sessionStorage.getItem('userName');
public adminName :any= sessionStorage.getItem('adminName');
public loggedin:any="";
isLoggedIn(){

  if(this.userName==null && this.adminName==null){
     return true;
  }
  else{
    return false;
  }

}
startInactivityTimer() {
  this.timeoutId = setTimeout(() => {
    /* this.logout(); */
  }, this.inactivityTimeout);
}
resetInactivityTimer() {
  clearTimeout(this.timeoutId);
  this.startInactivityTimer();
}

isloggedIn() {
  return !!sessionStorage.getItem('userEmail');
}
logoutUser() {
  sessionStorage.removeItem ('userEmail');
 this.router.navigate(['/login'])
}
 getToken(){
  return sessionStorage.getItem('userEmail');
 }
 getEmployeeTimesheets(employeeId: string,month: number, year: number) {
  return this.http.get<any[]>(`${this.apiUrl}?name=${employeeId}`);
}
}
