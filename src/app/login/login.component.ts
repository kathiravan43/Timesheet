import { Component,OnInit } from '@angular/core';
import{FormGroup,FormBuilder, Validators, FormControl} from "@angular/forms";
import{HttpClient} from '@angular/common/http'
import { Router } from '@angular/router';
import { DbService } from '../Db.service';
import { ActiveHoursService } from '../ActiveHours.service';
import { environment } from 'src/environments/environment';
import { LoggerService } from '../logger.service';
import { LoggerModule, NGXLogger, NgxLoggerLevel } from "ngx-logger";

/* import { WindowsReloadComponent } from '../WindowsReload/WindowsReload.component'; */
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
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   public loginForm!: FormGroup
   public adminEmail:any=environment.adminName;
   public adminPassword:any=environment.password;
   public success:boolean=false;
   userData:any="";
  constructor(private formBuilder:FormBuilder , private http : HttpClient , private router:Router ,private db:DbService, private activedb:ActiveHoursService, private logger: LoggerService,private loggers: NGXLogger){}
  ngOnInit(): void {
   this.loginForm= this.formBuilder.group({
    email:['',[Validators.required, Validators.email, emailValidator]],
    password:['',[Validators.required, Validators.maxLength(10)]]
   });

  }
   login(){
   this.http.get<any>(environment.loginUrl)
   .subscribe(res=>{
    this.userData = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });
    if(this.userData){
      alert("Login is success")

      sessionStorage.setItem('userName',this.userData.fullName);
       sessionStorage.setItem('userEmail',this.userData.email);
       sessionStorage.setItem('department',this.userData.department);
       sessionStorage.setItem('dateofbirth',this.userData.dob);
       sessionStorage.setItem('mobileNo',this.userData.mobileNo);
       this.logger.log(this.userData);
      this.loginForm.reset();
      this.success=true;
      this.router.navigate(['/windowreload']);






    }
    else if(this.loginForm.value.email=== this.adminEmail  && this.loginForm.value.password === this.adminPassword){
      alert("Hai Admin");
      sessionStorage.setItem('adminEmail',this.loginForm.value.email);
      sessionStorage.setItem('adminName',this.adminEmail);
      console.log(this.loginForm.value.email)
      this.router.navigate(['/adminwork']);

    }
    else {
      alert("Please enter valid email and password.");
      this.logger.error('Ur are not in this organization')

    }
   })
  }
  isFieldValid(fieldName: string){
    const field = this.loginForm.get(fieldName);
    return field && field.valid;
  }

  isFieldInvalid(fieldName: string) {
    const field = this.loginForm.get(fieldName);
    return field && field.touched && field.invalid;
  }

}
