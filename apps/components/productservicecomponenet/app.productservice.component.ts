import { Component, OnInit } from '@angular/core';
import { Categories } from './app.product.model';
import { Product } from './../../Models/app.product.model';
import { ProductService } from "./../../services/app.product.service";
import { Response } from "@angular/http";

@Component({
    selector: 'app-productservice-component',
    templateUrl: './app.product.view.html'    
})
export class ProductServiceComponent implements OnInit {
    product:Product;    
    products: Array<Product>;
    categories = Categories;
    tableHeaders: Array<string>;
    
    constructor( private serv:ProductService) { 
        this.product = new Product("",0,"","","",0);
        this.products = new Array<Product>();
        this.tableHeaders = Array<string>();        
    }

    // The method will be immedicatly invoked after the constructor
    ngOnInit(): void { 
        // Read all properties of product and push in table then in tableHeader array
        for(let p in this.product){
            this.tableHeaders.push(p);
        }
        // Make call to 
        this.loadData();
    }

    loadData(): void {
        this.serv.getData().subscribe(
            (resp:Response)=>{
                this.products = resp.json().data;
                console.log(resp.json().data);
            },
           error => {
               console.log(`Error occurred ${error}`);
           }
       );
    }
   

    clear(): void { 
        this.product = new Product("",0,"","","",0);
    }

    save():void{
        //this.products = this.logic.saveProducts(this.product);
        this.serv.postData(this.product).subscribe(
             (resp:Response)=>{
                this.products.push(resp.json().data);
                console.log(this.products);
             },
            error => {
                console.log(`Error occurred ${error}`);
            }
        );
    }

    edit(p:Product):void{
        //this.products = this.logic.saveProducts(this.product);
        this.product = Object.assign({}, p);
    }

    update():void{
        //this.products = this.logic.saveProducts(this.product);
        this.serv.putData(this.product.ProductId, this.product).subscribe(
             (resp:Response)=>{
                //this.products.push(resp.json().data);
                console.log(JSON.stringify(this.products));
             },
            error => {
                console.log(`Error occurred ${error}`);
            }
        );
    }

    delete(prd:Product):void{
        alert('alert' + prd._id);
        //this.products = this.logic.saveProducts(this.product);
        this.serv.deleteData(prd._id).subscribe(
             (resp:Response)=>{
                console.log(resp.json().data);
                
                // this.products = this.products.filter(function(item) {
                //     return item !== resp.json().data
                // });
                this.loadData();
                
                  console.log("Load Producsts" + JSON.stringify(this.products));
             },
            error => {
                console.log(`Error occurred ${error}`);
            }
        );
    }
    
    // getSelectedRow(p:Product):void{
    //     // 1. Create a deep copy of the selected row
    //     // 2. Assign that copy to this
    //     this.product = Object.assign({}, p);
    // }    
}
