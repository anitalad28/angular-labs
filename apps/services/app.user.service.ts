import { Injectable } from "@angular/core";
import { Http,Response,Headers,RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { User } from "../Models/app.user.model";

@Injectable()

export class UserService {
    url:string;
    constructor( private http:Http ){
        this.url =  "http://localhost:4070";
    }

    authUser( usr:User ): Observable<Response> {

        console.log("I am in the service " + JSON.stringify(usr));
        let resp: Observable<Response>; 

        let header:Headers = new Headers({"Content-Type":"application/json"});
       
        let options:RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}/api/user/auth`,
                                JSON.stringify(usr),
                                options);
        return resp;
    }
}