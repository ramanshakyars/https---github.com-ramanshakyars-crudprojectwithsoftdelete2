import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrls: ['./confirm.component.css']
})
export class ConfirmComponent {


  // allusers: any = [];
  // user:any=[];
// employees: any;

  constructor(public dialogRef: MatDialogRef<ConfirmComponent>){
  }
  deleteData() {
    this.dialogRef.close(true);

  }
}
