import { Component, Input, OnInit } from '@angular/core';
import { DbService } from '../Db.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-Myprofile',
  templateUrl: './Myprofile.component.html',
  styleUrls: ['./Myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  @Input() childData:any;
  public User :any = sessionStorage.getItem('userEmail');
  public UserName :any = sessionStorage.getItem('userName');
  public userDepartment :any = sessionStorage.getItem('department');
  public userMobileNo :any = sessionStorage.getItem('mobileNo');
  public userDob :any = sessionStorage.getItem('dateofbirth');
  MyData : any="";
 public data :any="";
  constructor(private db:DbService , private rout:Router) {
    if(this.UserName){

    }
    else{

      this.rout.navigate(['/login']);
    }

   }

  ngOnInit() {
    this.db.oneuser(this.UserName).subscribe(data  =>{
      this.MyData=data;
    })
  }
ngOnChanges(){
  console.log(this.childData);
}
}
