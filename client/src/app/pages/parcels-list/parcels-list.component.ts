import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ParcelsService } from '../../services/parcels.service';
// Import Models
import { Parcels } from '../../domain/parcelum_db/parcels';

// START - USED SERVICES
/**
* parcelsService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* parcelsService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Parcels
 * @class ParcelsListComponent
 */
@Component({
    selector: 'app-parcels-list',
    templateUrl: './parcels-list.component.html',
    styleUrls: ['./parcels-list.component.css']
})
export class ParcelsListComponent implements OnInit {
    list: Parcels[];
    search: any = {};
    idSelected: string;
    constructor(
        private parcelsService: ParcelsService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.parcelsService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Parcels to remove
     *
     * @param {string} id Id of the Parcels to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Parcels
     */
    deleteItem() {
        this.parcelsService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
