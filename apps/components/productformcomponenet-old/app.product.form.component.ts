import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from '@angular/forms';
import { Product,Categories } from './app.product.model';
import { ProductLogic } from './app.product.form.logic';

@Component({
    selector: 'app-product-form-component',
    templateUrl: './app.product.form.view.html'    
})
export class ProductFormComponent implements OnInit {
    product:Product;
    private logic:ProductLogic;
    products: Array<Product>;
    categories = Categories;
    tableHeaders: Array<string>;
    isSaved: boolean;
    frmProduct: FormGroup;

     constructor() { 
        this.product = new Product(0,"","",0);
        this.logic = new ProductLogic();
        this.tableHeaders = Array<string>();        
        this.isSaved = false;

        // define instance of form group and map property of model class
        //i.e product class with form control
        this.frmProduct = new FormGroup({
            ProductId: new FormControl(this.product.productId),
            ProductName: new FormControl(this.product.productName),
            CategoryName: new FormControl(this.product.categoryName),
            Price: new FormControl(this.product.price)
        });
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
        //read form values using "forControlName" uder form 
        this.product = this.frmProduct.value;
        
        this.products = this.logic.saveProducts(this.product);
        this.isSaved = false;
    }
    
    loadForm():void{
        this.product = new Product(0,"","",0)
        this.isSaved = true;
    }
    getSelectedRow(p:Product):void{
        // 1. Create a deep copy of the selected row
        // 2. Assign that copy to this
        this.product = Object.assign({}, p);
    }   
}
