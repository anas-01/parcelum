import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelsListComponent } from './parcels-list.component';
import { ParcelsListRoutingModule } from './parcels-list-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ParcelsListRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ParcelsListComponent
  ]
})
export class ParcelsListModule { }
