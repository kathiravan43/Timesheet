import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DbService } from '../Db.service';

@Component({
  selector: 'app-Asigntask',
  templateUrl: './Asigntask.component.html',
  styleUrls: ['./Asigntask.component.css']
})
export class AsigntaskComponent implements OnInit {
  taskForm!: FormGroup;
  listOfEmployees:any="";
  constructor(private db:DbService,private formBuilder: FormBuilder) {
    this.db.getdata().subscribe(data=>{
      this.listOfEmployees=data;
    })
  }

  ngOnInit() {
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required],
      description: ['', Validators.required],
      deadline: ['', Validators.required],
      assignee: ['', Validators.required],
      status: 'Pending'
    });
  }

  onSubmit() {
    if (this.taskForm.invalid) {
   alert('FILL ALL THE FILEDS');
    }

    this.db.assignTask(this.taskForm.value)
      .subscribe(
        () => {

          alert("Successfully added");
        },
        error => {
         alert("not added");
        }
      );
  }

}


