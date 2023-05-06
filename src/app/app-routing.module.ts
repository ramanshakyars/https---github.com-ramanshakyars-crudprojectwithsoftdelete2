import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ConfirmComponent } from './confirm/confirm.component';
import { DialogComponent } from './dialog/dialog.component';

const routes: Routes = [

  {path:'',component:DashBoardComponent},
  {path:'confirm',component:ConfirmComponent},
  {path:'dialog',component:DialogComponent},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
