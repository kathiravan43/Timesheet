import { Component, OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators, FormControl} from "@angular/forms";
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { DbService } from '../Db.service';
import { environment } from 'src/environments/environment';
function aadharNumberValidator(control: FormControl): { [key: string]: any } | null {
  const aadharNumberRegex = environment.aadharNumberRegex;
  if (control.value && !aadharNumberRegex.test(control.value)) {
    return { invalidAadharNumber: true };
  }
  return null;
}
function emailValidator(control: FormControl): { [key: string]: boolean } | null {
  const email = control.value;
  const personalEmailRegex = environment.personalEmailRegex;
  const organizationEmailRegex = environment.organizationEmailRegex;

  if (email) {
    if (!personalEmailRegex.test(email) && !organizationEmailRegex.test(email)) {
      return { invalidEmail: true };
    }
  }

  return null;
}

@Component({
  selector: 'app-Signup',
  templateUrl: './Signup.component.html',
  styleUrls: ['./Signup.component.css']
})
export class SignupComponent implements OnInit {
  employeeForm !: FormGroup ;
  control:any=null;


  constructor(
    private formBuilder: FormBuilder,
    private db:DbService
  ) {}

  ngOnInit() {
    this.employeeForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('[A-Za-z ]*')]],
      email: ['', [Validators.required, Validators.email,emailValidator]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      mobileNumber: ['', [Validators.required, Validators.pattern('[0-9]{10}')]],
      department: ['', Validators.required],
      salary: ['', Validators.required],
      gender: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      address: ['', Validators.required],
      aadharNumber: ['', [Validators.required,aadharNumberValidator]],
      bankAccountNumber: ['', Validators.required],
      sureName: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      this.markFormFieldsAsTouched();
      return;
    }

    const employeeData = this.employeeForm.value;
    this.db.addEmployee1(employeeData).subscribe(
      response => {
        console.log('Employee added successfully:', response);
        // You can perform any additional actions here, such as showing a success message or navigating to a different page.
      },
      error => {
        console.error('Error adding employee:', error);
        // Handle the error accordingly, e.g., display an error message to the user.
      }
    );
  }

  markFormFieldsAsTouched() {
    Object.keys(this.employeeForm.controls).forEach(field => {
       this.control = this.employeeForm.get(field);
     this. control.markAsTouched({ onlySelf: true });
    });
  }
}
