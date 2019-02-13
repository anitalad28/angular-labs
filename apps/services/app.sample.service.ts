import { Injectable } from "@angular/core";
import { Product } from "../components/productformcomponent/app.product.model";
@Injectable()
export class SampleService {
    getProducts():any {
        let products:Array<Product>;
        products = new  Array<Product>();
        products.push( new Product( 1001, "P1", "C1", 122, false));
        products.push( new Product( 1001, "P2", "C2", 123, false));

        return products;
    }
}