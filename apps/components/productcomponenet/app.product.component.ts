import { Component, OnInit } from '@angular/core';
import { Product,Categories } from './app.product.model';
import { ProductLogic } from './app.product.logic';

@Component({
    selector: 'app-product-component',
    templateUrl: './app.product.view.html'    
})
export class ProductComponent implements OnInit {
    product:Product;
    private logic:ProductLogic;
    products: Array<Product>;
    categories = Categories;
    tableHeaders: Array<string>;
    
    constructor() { 
        this.product = new Product(0,"","",0);
        this.logic = new ProductLogic();
        this.tableHeaders = Array<string>();        
    }

    // The method will be immedicatly invoked after the constructor
    ngOnInit(): void { 
        // Read all properties of product and push in table then in tableHeader array
        for(let p in this.product){
            this.tableHeaders.push(p);
        }
        this.products = this.logic.getProducts();
    }

    clear(): void { 
        this.product = new Product(0,"","",0);
    }

    save():void{
        this.products = this.logic.saveProducts(this.product);
    }
    
    getSelectedRow(p:Product):void{
        // 1. Create a deep copy of the selected row
        // 2. Assign that copy to this
        this.product = Object.assign({}, p);
    }    
}
