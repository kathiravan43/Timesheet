import { Component, OnInit } from '@angular/core';
import { ActiveHoursService } from '../ActiveHours.service';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-OverView',
  templateUrl: './OverView.component.html',
  styleUrls: ['./OverView.component.css']
})
export class OverViewComponent implements OnInit {
  timesheetData: any= "";
  searchTerm: string = '';
  filteredData: any[] = [];
  selectedEmployee: any = null;
  constructor(private activedb:ActiveHoursService,private datePipe: DatePipe) { }

  ngOnInit() {
    this.getTimesheetData();
  }
  getTimesheetData() {
    this.activedb.getSavedLoginAndLogout().subscribe(
      (data) => {
        this.timesheetData = data;
        this.filteredData = [...this.timesheetData];
        console.log(data)
        console.log(this.filteredData)
      },
      (error) => console.error('Error retrieving timesheet data:', error)
    );
  }
  formatDate(dateTime: string): string {
    console.log(dateTime);
    const formattedDateTime = this.datePipe.transform(dateTime, 'yyyy-MM-dd');
    return formattedDateTime || '';
  }

  formatDuration(duration: number): string {
    const hours = Math.floor(duration);
    const minutes = Math.floor((duration % 1) * 60);
    const formattedDuration = `${hours}h ${minutes}m`;
    return formattedDuration;
  }


  filterData() {
    if (this.searchTerm.trim() === '') {
      this.filteredData = [...this.timesheetData];
    } else {
      this.filteredData = this.timesheetData.filter(
        (data: { userName: string; }) =>
          data.userName.toLowerCase().includes(this.searchTerm.toLowerCase())

      );
    }

  }
  showEmployeeDetails(employee: any) {
    this.selectedEmployee = employee;
  }

}
