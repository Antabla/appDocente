/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5d1e567d0e8b622e6162666b
*
* You will get 10% discount for each one of your friends
* 
*/
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ProfesorService } from '../../services/profesor.service';
// Import Models
import { Profesor } from '../../domain/app-docente_db/profesor';

// START - USED SERVICES
/**
* ProfesorService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ProfesorService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Profesor
 * @class ProfesorListComponent
 */
@Component({
    selector: 'app-profesor-list',
    templateUrl: './profesor-list.component.html',
    styleUrls: ['./profesor-list.component.css']
})
export class ProfesorListComponent implements OnInit {
    list: Profesor[];
    search: any = {};
    idSelected: string;
    constructor(
        private profesorService: ProfesorService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.profesorService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Profesor to remove
     *
     * @param {string} id Id of the Profesor to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Profesor
     */
    deleteItem() {
        this.profesorService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
