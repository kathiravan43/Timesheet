import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Auth.service';

@Component({
  selector: 'app-Holidays',
  templateUrl: './Holidays.component.html',
  styleUrls: ['./Holidays.component.css']
})
export class HolidaysComponent implements OnInit {
  employeeId: any = sessionStorage.getItem('userName') // Replace with the actual employee ID
  month!: number; // Replace with the desired month number (e.g., July)
  year!: number  ; // Replace with the desired year

  daysPresent: number | undefined;

  constructor(private timesheetService: AuthService) { }

  ngOnInit() {
    //this.calculateDaysPresent();
  }

  calculateDaysPresent() {
    this.timesheetService.getEmployeeTimesheets(this.employeeId, this.month,this.year)
      .subscribe(timesheets => {
        console.log(timesheets)
        const uniqueDates = new Set<string>();
        timesheets.forEach(timesheet => {
          const date = new Date(timesheet.date);
          console.log(timesheet.date);
          if (date.getMonth() === this.month - 1 && date.getFullYear() === this.year) {
            uniqueDates.add(timesheet.date);
          }
        });
        this.daysPresent = uniqueDates.size;
      });
  }
}
