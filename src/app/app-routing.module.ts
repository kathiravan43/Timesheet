import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminLoginComponent } from './AdminLogin/AdminLogin.component';
import { AdminWorkComponent } from './AdminWork/AdminWork.component';
import { HolidaysComponent } from './Holidays/Holidays.component';
import { HomeComponent } from './Home/Home.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './Signup/Signup.component';
import { UserWorkComponent } from './UserWork/UserWork.component';
import { MyprofileComponent } from './Myprofile/Myprofile.component';
import { ViewEmployeeComponent } from './ViewEmployee/ViewEmployee.component';
import { EmployeeDashboardComponent } from './EmployeeDashboard/EmployeeDashboard.component';
import { LeaveRequestComponent } from './LeaveRequest/LeaveRequest.component';
import { TimeSheetComponent } from './TimeSheet/TimeSheet.component';
import { NotificationComponent } from './Notification/Notification.component';
import { AttendanceStatusComponent } from './AttendanceStatus/AttendanceStatus.component';
import { AsigntaskComponent } from './Asigntask/Asigntask.component';
import { MyleaveComponent } from './Myleave/Myleave.component';
import { GetMessageComponent } from './get-message/get-message.component';
import { MyTaskComponent } from './MyTask/MyTask.component';
import { LoginProtectGuard } from './login-protect.guard';
import { ViewTimesheetComponent } from './ViewTimesheet/ViewTimesheet.component';
import { LogoutComponent } from './Logout/Logout.component';
import { TimePipePipe } from './TimePipe.pipe';
import { MyWorkDoneComponent } from './MyWorkDone/MyWorkDone.component';
import { WordWarpPipe } from './WordWarp.pipe';
import { WindowsReloadComponent } from './WindowsReload/WindowsReload.component';
import { AdminSideNavbarComponent } from './AdminSideNavbar/AdminSideNavbar.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { OverViewComponent } from './OverView/OverView.component';
import { ViewAssignedTaskComponent } from './ViewAssignedTask/ViewAssignedTask.component';

const routes: Routes = [
  {
    path:'login',component:LoginComponent
  },
  {
    path:'signup',component:SignupComponent
  },
  {
    path:'holidays',component:HolidaysComponent
  },
  {
    path:'home',component:HomeComponent

  },
  {
  path:'adminlogin',component:AdminLoginComponent
  },
  {
    path:'myprofile',component:MyprofileComponent,

  },
  {
    path:'viewemp',component:ViewEmployeeComponent
  },
  {
    path:'leaverequest' , component:LeaveRequestComponent
  },
  {
    path:'timesheet' , component:TimeSheetComponent
  },
{
  path:'empdash' , component:EmployeeDashboardComponent
},

  {
    path:'userwork',component:UserWorkComponent,


    },
  {
    path:'adminwork',component:AdminWorkComponent
    },
    {
      path:'notification',component:NotificationComponent
    },
    {
      path:'viewleave',component:AttendanceStatusComponent
    },
    {
      path:'logout',component:LogoutComponent
    },
    {
      path:'assigntask' , component:AsigntaskComponent
    },
    {
      path:'viewtimesheet',component:ViewTimesheetComponent
    },
    {
      path:'myleave' , component:MyleaveComponent
    },
    {
      path:'message',component:GetMessageComponent
    },
    {
      path:'mytask',component:MyTaskComponent
    },
    {
      path:'myworkdone',component:MyWorkDoneComponent
    },
    {
      path:'windowreload',component:WindowsReloadComponent
    },

    {
      path:'adminsidenav',component:AdminSideNavbarComponent
    },
    {
      path:'dashboard',component:DashboardComponent
    },
    {
      path:'overview',component:OverViewComponent
    },
    {
      path:'viewassignedtask', component:ViewAssignedTaskComponent
    },

   {
    path:'**',redirectTo:'home',pathMatch:'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],


})
export class AppRoutingModule { }
