import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParcelsListComponent } from './parcels-list.component';

const routes: Routes = [
  {
    path: '',
    component: ParcelsListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParcelsListRoutingModule { }
