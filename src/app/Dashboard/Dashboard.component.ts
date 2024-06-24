import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DbService } from '../Db.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Dashboard',
  templateUrl: './Dashboard.component.html',
  styleUrls: ['./Dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  employeeCount: number | undefined;
  departmentCounts: { department: string; count: number; }[] | undefined;
  departmentCountsMap:any=null;
  departmentDataMap:any=null;
  employees: any="";
  filteredEmployees: any="";
  searchTerm: string ="";

  constructor(private http: HttpClient,private db:DbService) {

this.getCountOfEmployees();
  }

  ngOnInit() {
    this.db.getdata().subscribe(data=>{
      console.log("Data",JSON.stringify(data));
      this.employees=data;
      this.filteredEmployees=data;
    })

  }

  getCountOfEmployees(): void {
    this.http.get<any[]>(environment.loginUrl)
      .subscribe(data => {
        this.employeeCount = data.length;
        this.departmentCounts = this.calculateDepartmentCounts(data);
        console.log('Department Counts:', this.departmentCounts);
        console.log(`Total number of employees: ${this.employeeCount}`);
      },
      error => {
        console.error('Error:', error);
      });
  }
  calculateDepartmentCounts(employees: any[]): { department: string, count: number }[] {
   this. departmentCountsMap = new Map<string, number>();

    employees.forEach(employee => {
      const department = employee.department;

      if (this.departmentCountsMap.has(department)) {
        this.departmentCountsMap.set(department, this.departmentCountsMap.get(department) + 1);
      } else {
        this.departmentCountsMap.set(department, 1);
      }
    });

    const departmentCounts: { department: string, count: number }[] = [];

    this.departmentCountsMap.forEach((count: any, department: any) => {
      departmentCounts.push({ department, count });
    });

    return departmentCounts;
  }
  /* applyFilter() {
    if (this.searchTerm) {
      this.filteredEmployees = this.employees.filter((employee: { name: string; }) =>
        employee.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredEmployees = this.employees; // Reset to all employees if the search term is empty
    }
  } */


}
