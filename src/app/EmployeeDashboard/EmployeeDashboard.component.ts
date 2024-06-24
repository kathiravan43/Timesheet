import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbService } from '../Db.service';
import { EmployeeModel } from './employee dash board.model';

@Component({
  selector: 'app-EmployeeDashboard',
  templateUrl: './EmployeeDashboard.component.html',
  styleUrls: ['./EmployeeDashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {

  formValue! :FormGroup;
  addEmp!:FormGroup;
  employeeData :any;
  employeeModelobj : EmployeeModel = new EmployeeModel();

  constructor(private formbuilder:FormBuilder ,private db:DbService) { }

  ngOnInit() {
    this.formValue=this.formbuilder.group({
      fullName:['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      email:['',[Validators.required, Validators.email]],
      password:['',Validators.required],
      mobileNo:['', Validators.compose([Validators.required, Validators.pattern('^[0-9]+$')])],
      salary:['',Validators.required],
      department:['',Validators.required],
      gender:['',Validators.required],
      dob:['',Validators.required]
    })

    this.getAllEmployee();

  }
  postEmployeeDetails(){
    if(this.formValue.valid){
    this. employeeModelobj.fullName=this.formValue.value.fullName;
    this.employeeModelobj.email=this.formValue.value.email;
    this.employeeModelobj.password=this.formValue.value.password;
    this.employeeModelobj.mobileNo=this.formValue.value.mobileNo;
    this.employeeModelobj.salary=this.formValue.value.salary;
    this.employeeModelobj.department=this.formValue.value.department;
    this.employeeModelobj.gender=this.formValue.value.gender;
    this.employeeModelobj.dob=this.formValue.value.dob;
   this.db.addEmployee(this.employeeModelobj)
   .subscribe(res=>{
    console.log(res);
    alert("Employee Added Successfully")
    let ref =document.getElementById('cancel')
    ref?.click();
    this.formValue.reset();
    this.getAllEmployee();

   })
  }

else{
  alert('Please fill in all required fields.');
}
  }
  getAllEmployee(){
    this.db.getdata()
    .subscribe(res=>{
      this.employeeData=res;
    })
  }

  deleteEmployee(row:any){
    this.db.deleteEmployees(row.fullName)
    .subscribe(res=>{
      alert("Employee Deleted")
    })

  }
  onEdit(row : any){
    this.employeeModelobj.fullName = row.fullName;
    this.formValue.controls['fullName'].setValue(row.fullName);
    this.formValue.controls['email'].setValue(row.email);
    this.formValue.controls['mobileNo'].setValue(row.mobileNo);
    this.formValue.controls['salary'].setValue(row.salary);
    this.formValue.controls['department'].setValue(row.department);
    this.formValue.controls['gender'].setValue(row.gender);
    this.formValue.controls['dob'].setValue(row.dob);
  }
  updateEmployee(){
    this. employeeModelobj.fullName=this.formValue.value.fullName;
    this.employeeModelobj.email=this.formValue.value.email;
    this.employeeModelobj.password=this.formValue.value.password;
    this.employeeModelobj.mobileNo=this.formValue.value.mobileNo;
    this.employeeModelobj.salary=this.formValue.value.salary;
    this.employeeModelobj.department=this.formValue.value.department;
    this.employeeModelobj.gender=this.formValue.value.gender;
    this.employeeModelobj.dob=this.formValue.value.dob;
    this.db.updateEmployee(this.employeeModelobj,this.employeeModelobj.fullName)
    .subscribe(res=>{
      alert("updated");
    })
  }
  isFieldValid(fieldName: string){
    const field = this.formValue.get(fieldName);
    return field && field.valid ;
  }
  isFieldInvalid(fieldName: string) {
    const field = this.formValue.get(fieldName);
    return field  && field.invalid && field.dirty && field.untouched ;
  }

}
