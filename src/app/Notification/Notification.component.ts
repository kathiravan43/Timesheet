import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Notification',
  templateUrl: './Notification.component.html',
  styleUrls: ['./Notification.component.css']
})
export class NotificationComponent implements OnInit {
   notification!: FormGroup;

  constructor(private http : HttpClient,private formbuilder:FormBuilder) { }

  ngOnInit() {
    this.notification=this.formbuilder.group({
      Receiver:['',Validators.required],
      Subject:['',Validators
    .required],
      Content:['',Validators.required]
    }

    )
  }
  sendMessage(){
    if(this.notification.valid){
  this.http.post<any>(environment.notificationUrl,this.notification.value)
.subscribe((res: any)=>{
  alert("signup successfull");
  this.notification.reset();

},err=>{

alert("something went worng");

})
  }

else{
  alert('fill all the fileds');
}
  }
}
