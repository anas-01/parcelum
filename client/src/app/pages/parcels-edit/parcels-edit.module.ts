import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParcelsEditComponent } from './parcels-edit.component';
import { ParcelsEditRoutingModule } from './parcels-edit-routing.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  imports: [
    CommonModule,
    ParcelsEditRoutingModule,
    FormsModule,
    SharedModule
  ],
  declarations: [
    ParcelsEditComponent
  ]
})
export class ParcelsEditModule { }
