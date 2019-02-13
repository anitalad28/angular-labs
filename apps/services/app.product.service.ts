import { Http,Response,Headers,RequestOptions } from "@angular/http";
import { Observable } from "rxjs";
import { Injectable } from "@angular/core";
import { Product } from "./../Models/app.product.model";
@Injectable()
export class ProductService {
    url:string;
    constructor(private http: Http){
        this.url = "http://localhost:4070";
    }

    getData(): Observable<Response> {
        let resp: Observable<Response>;

        let header:Headers = new Headers({'Content-Type':'application/json'});
        header.append("Authorization",'Bearer ' + sessionStorage.getItem("token"));
        //2. Define request option for heder
        // Collection of header values
        let options:RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.get(`${this.url}/api/products`, options);
        return resp;
    }

     postData(prd:Product): Observable<Response> {
        let resp: Observable<Response>;
        //1. Define request headers
        let header:Headers = new Headers({'Content-Type':'application/json'});
        header.append("Authorization",'Bearer ' + sessionStorage.getItem("token"));
        //2. Define request option for heder
        // Collection of header values
        let options:RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.post(`${this.url}/api/products`,
                                JSON.stringify(prd),
                                options);
        return resp;
    }

    putData(id:number,prd:Product): Observable<Response> {
        let resp: Observable<Response>;
        //1. Define request headers
        let header:Headers = new Headers({'Content-Type':'application/json'});
        header.append("Authorization",'Bearer ' + sessionStorage.getItem("token"));
        //2. Define request option for heder
        // Collection of header values
        let options:RequestOptions = new RequestOptions();
        options.headers = header;
        resp = this.http.put(`${this.url}/api/products/${id}`,
                                JSON.stringify(prd),
                                options);
        return resp;
    }

    deleteData(id:string): Observable<Response> {
        let resp: Observable<Response>;

        let header:Headers = new Headers({'Content-Type':'application/json'});
        header.append("Authorization",'Bearer ' + sessionStorage.getItem("token"));
        //2. Define request option for heder
        // Collection of header values
        let options:RequestOptions = new RequestOptions();
        options.headers = header;

        resp = this.http.delete(`${this.url}/api/products/${id}`, options);
        return resp;
    }
}

