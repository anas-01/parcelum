import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParcelsEditComponent } from './parcels-edit.component';

const routes: Routes = [
  {
    path: '',
    component: ParcelsEditComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcelsEditRoutingModule { }
