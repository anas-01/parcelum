// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ParcelsService } from '../../services/parcels.service';
import { CustomersService } from '../../services/customers.service';
// Import Models
import { Parcels } from '../../domain/parcelum_db/parcels';
import { Customers } from '../../domain/parcelum_db/customers';

// START - USED SERVICES
/**
* parcelsService.create
*	@description CRUD ACTION create
*
* parcelsService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* parcelsService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* customersService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Parcels
 */
@Component({
    selector: 'app-parcels-edit',
    templateUrl: 'parcels-edit.component.html',
    styleUrls: ['parcels-edit.component.css']
})
export class ParcelsEditComponent implements OnInit {
    item: Parcels;
    listCustomer: Customers[];
    model: Parcels;
    formValid: Boolean;

    constructor(
    private parcelsService: ParcelsService,
    private customersService: CustomersService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Parcels();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.parcelsService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.customersService.list().subscribe(list => this.listCustomer = list);
        });
    }


    /**
     * Save Parcels
     *
     * @param {boolean} formValid Form validity check
     * @param Parcels item Parcels to save
     */
    save(formValid: boolean, item: Parcels): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.parcelsService.update(item).subscribe(data => this.goBack());
            } else {
                this.parcelsService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



