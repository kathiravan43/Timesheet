import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-AdminLogin',
  templateUrl: './AdminLogin.component.html',
  styleUrls: ['./AdminLogin.component.css']
})
export class AdminLoginComponent implements OnInit {

  public loginForm!: FormGroup;
  constructor(private formBuilder:FormBuilder , private http : HttpClient , private router:Router){}
  ngOnInit(): void {
   this.loginForm= this.formBuilder.group({
    email:[''],
    password:['']
   })

  }
  login(){
   this.http.get<any>("http://localhost:3000/admin")
   .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password
    });
    if(user){
      alert("Login is success")
      this.loginForm.reset();
      this.router.navigate(['adminwork']);
    }
    else{
      alert("user not found");
    }
   })
  }

}

