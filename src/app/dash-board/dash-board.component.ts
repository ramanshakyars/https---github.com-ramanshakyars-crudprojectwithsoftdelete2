import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../api.service';
import { ConfirmComponent } from '../confirm/confirm.component';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent {
  code ="+91"
  filterControl=new FormControl;
  filteredList: any=[];
  allusers: any = [];


  constructor(private dialog:MatDialog,private service:ApiService){}

  ngOnInit(): void {
    this.getAllData();
    this.onFilter();

    
  }

  getAllData() {
    this.service.loadData().subscribe((allUsers: any) => {
      this.allusers=[]
      this.allusers = allUsers
      this.filteredList=[]
      this.filteredList=this.allusers
      
    })
  }
  openAddUserDialog( action: string, editData:any)
  {
    const dialogRef = this.dialog.open(DialogComponent,{
      data:{
        action:action,
        editData:editData
      },
      disableClose: true
    }
      )
dialogRef.afterClosed().subscribe((result)=>
{
  if(action=== 'add'&& result!= null){
    this.service.postData(result).subscribe((result)=>{this.getAllData()})
  }else if(action==='edit' && result!=null){
    result.id= editData.id
    this.service.updateData(result).subscribe((result)=>this.getAllData())
  }
})
  }


  opentDialog( id:number): void {
    const dialogRef = this.dialog.open(ConfirmComponent, {
        width: '250px',
        
      });
      dialogRef.afterClosed().subscribe((result)=>{
        if(result){
          this.service.deleteUserData(id).subscribe(()=> this.getAllData())
          console.log(this.allusers);
          
        }
      })

    }

    onFilter(){
      this.filterControl.valueChanges.subscribe((res)=>{
        if(res!=''){
          this.filteredList=this.allusers.filter((ele:any)=>
          ele.name.toLowerCase().includes(res.toLowerCase())
          );
        }
        else{
          this.filteredList=this.allusers;
        }
      })
    }


}