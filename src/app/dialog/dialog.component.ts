import { Component, OnInit,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

import { ApiService } from '../api.service';
// import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {

  public userForm!: FormGroup;
  
  



  constructor( private formbuilder: FormBuilder,private api:ApiService, public dialogRef: MatDialogRef<DialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any
    )
     {
        this.form()
     }
  ngOnInit(): void {
    if(this.data.action === 'edit'){
      this.userForm.patchValue(this.data.editData)
    }
    
  }

form(){
  this.userForm = this.formbuilder.group({
    name: [],
    email: [],
    mobile: [],
    gender:[],
    dob:[],
    address:[],
  })

}

  saveData(){
 this.dialogRef.close(this.userForm.value)
 
 
  }
 
}
