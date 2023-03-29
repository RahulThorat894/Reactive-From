import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DashbordComponent } from './dashbord/dashbord.component';
import { DeleteComponent } from './delete/delete.component';
import { SetComponent } from './set/set.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [

  {
    path:'',
    component:DashbordComponent

  },
  {
    path:'add',
    component:AddComponent
    
  },
  {
    path:'update',
    component:UpdateComponent
  },
  {
    path:'delete',
    component:DeleteComponent
  },
  {
    path:'set',
    component:SetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
