import { Component } from '@angular/core';
import { DbService } from '../Db.service';

@Component({
  selector: 'app-get-message',
  templateUrl: './get-message.component.html',
  styleUrls: ['./get-message.component.css']
})
export class GetMessageComponent {
  messageFromAdmin:any="";
  constructor(private db:DbService){
   this.db.getMessageFromAdmin().subscribe(data=>{
      this.messageFromAdmin=data;
    })
  }
}
