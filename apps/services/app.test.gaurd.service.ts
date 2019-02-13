import { Injectable } from "@angular/core";
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot,CanActivate } from "@angular/router";

@Injectable()
export class AppGaurdService implements CanActivate {
    constructor( private _router: Router ) {}

    /* Region Comment */
    canActivate(
    route : ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ):boolean {
        console.log("CanActivate");
        //return true;
        // Remove comment to return true
        alert("You are not allowed to view this page. You are redirected to error page");
        //this._router.navigate(["home"]);
        this._router.navigate(["error"]);
        return false;
    }
}