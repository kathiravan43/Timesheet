import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Home',
  templateUrl: './Home.component.html',
  styleUrls: ['./Home.component.css']
})
export class HomeComponent implements OnInit {

  public loginForm !: FormGroup;
  redirectTo: any;

  constructor(private formBuilder:FormBuilder , private http : HttpClient , private router:Router){}
  ngOnInit(): void {
   this.loginForm= this.formBuilder.group({
    email:['',[Validators.required,Validators.email]],
    password:['',Validators.required]
   });

  }
  login(){
   this.http.get<any>("http://localhost:3000/signupUsers")
   .subscribe(res=>{
    const user = res.find((a:any)=>{
      return a.email === this.loginForm.value.email && a.password === this.loginForm.value.password

    });
    if(user){

      alert("Login is success")
      this.loginForm.reset();
      this.router.navigate(['userwork']);

    }
    else{
      alert("user not found");

    }

   })
  }

}
