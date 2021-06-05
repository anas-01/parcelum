// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CustomersService } from '../../services/customers.service';
import { ParcelsService } from '../../services/parcels.service';
// Import Models
import { Customers } from '../../domain/parcelum_db/customers';
import { Parcels } from '../../domain/parcelum_db/parcels';

// START - USED SERVICES
/**
* customersService.create
*	@description CRUD ACTION create
*
* customersService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
* customersService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* parcelsService.findBycustomer
*	@description CRUD ACTION findBycustomer
*	@param Objectid key Id of model to search for
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Customers
 */
@Component({
    selector: 'app-customers-edit',
    templateUrl: 'customers-edit.component.html',
    styleUrls: ['customers-edit.component.css']
})
export class CustomersEditComponent implements OnInit {
    item: Customers;
    externalParcels_customer: Parcels[];
    model: Customers;
    formValid: Boolean;

    constructor(
    private customersService: CustomersService,
    private parcelsService: ParcelsService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Customers();
        this.externalParcels_customer = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.customersService.get(id).subscribe(item => this.item = item);
                this.parcelsService.findByCustomer(id).subscribe(list => this.externalParcels_customer = list);
            }
            // Get relations
        });
    }


    /**
     * Save Customers
     *
     * @param {boolean} formValid Form validity check
     * @param Customers item Customers to save
     */
    save(formValid: boolean, item: Customers): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.customersService.update(item).subscribe(data => this.goBack());
            } else {
                this.customersService.create(item).subscribe(data => this.goBack());
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



