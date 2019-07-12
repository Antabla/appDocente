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
/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE respuestaBaseService PLEASE EDIT ../respuesta.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { Respuesta } from '../../domain/app-docente_db/respuesta';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Respuesta.service.ts
 */

/*
 * SCHEMA DB Respuesta
 *
	{
		id_estudiante: {
			type: 'Integer'
		},
		id_pregunta: {
			type: 'Integer'
		},
		valor_respuesta: {
			type: 'String',
			required : true
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class RespuestaBaseService {

    contextUrl: string = environment.endpoint + '/respuesta';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * RespuestaService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Respuesta): Observable<Respuesta> {
        return this.http
            .post<Respuesta>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * RespuestaService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * RespuestaService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id 
    *
    */
    get(id: string): Observable<Respuesta> {
        return this.http
            .get<Respuesta>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * RespuestaService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Respuesta[]> {
        return this.http
            .get<Respuesta[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * RespuestaService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Respuesta): Observable<Respuesta> {
        return this.http
            .post<Respuesta>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
