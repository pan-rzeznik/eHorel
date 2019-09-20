import { DbService } from './../services/db.service';
import { Injectable } from '@angular/core';

import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';


@Injectable()
export class SingleProductResolver implements Resolve<any> {

    constructor(private db: DbService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
       return this.db.getProduct(route.params.id).pipe(first());
    }
}

