import { ENVIRONMENT_INITIALIZER, EnvironmentInjector, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './Header/Header.component';
import { FooterComponent } from './Footer/Footer.component';
import { SignupComponent } from './Signup/Signup.component';

import { HolidaysComponent } from './Holidays/Holidays.component';
import { HomeComponent } from './Home/Home.component';
import { AdminLoginComponent } from './AdminLogin/AdminLogin.component';
import { AdminWorkComponent } from './AdminWork/AdminWork.component';
import { UserWorkComponent } from './UserWork/UserWork.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersidenavbarComponent } from './usersidenavbar/usersidenavbar.component';
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
import { DisplayComponent } from './Display/Display.component';
import { ViewTimesheetComponent } from './ViewTimesheet/ViewTimesheet.component';
import { LogoutComponent } from './Logout/Logout.component';
import { MouseEventComponent } from './MouseEvent/MouseEvent.component';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";
import { TimePipePipe } from './TimePipe.pipe';
import { MyWorkDoneComponent } from './MyWorkDone/MyWorkDone.component';
import { WordWarpPipe } from './WordWarp.pipe';
import { WindowsReloadComponent } from './WindowsReload/WindowsReload.component';
import { AdminSideNavbarComponent } from './AdminSideNavbar/AdminSideNavbar.component';
import { DashboardComponent } from './Dashboard/Dashboard.component';
import { OverViewComponent } from './OverView/OverView.component';
import { DatePipe } from '@angular/common';
import { ViewAssignedTaskComponent } from './ViewAssignedTask/ViewAssignedTask.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
      HeaderComponent,
      FooterComponent,
      SignupComponent,
      HolidaysComponent,
      HomeComponent,
      AdminLoginComponent,
      AdminWorkComponent,
      UserWorkComponent,
      UsersidenavbarComponent,
      MyprofileComponent,
      ViewEmployeeComponent,
      EmployeeDashboardComponent,
      LeaveRequestComponent,
      TimeSheetComponent,
      NotificationComponent,
      AttendanceStatusComponent,
      AsigntaskComponent,
      MyleaveComponent,
      GetMessageComponent,
      MyTaskComponent,
      DisplayComponent,
      ViewTimesheetComponent,
      LogoutComponent,
      MouseEventComponent,
      TimePipePipe,
      MyWorkDoneComponent,
      WordWarpPipe,
      WindowsReloadComponent,
      AdminSideNavbarComponent,
      DashboardComponent,
      OverViewComponent,
      ViewAssignedTaskComponent,

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    LoggerModule.forRoot({
      serverLoggingUrl: '/api/logs',
      level: NgxLoggerLevel.DEBUG,
      serverLogLevel: NgxLoggerLevel.ERROR
    }),

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
