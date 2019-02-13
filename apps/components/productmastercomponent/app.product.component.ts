import { Component, OnInit,Input, Output, EventEmitter, OnChanges } from '@angular/core';
import {Product,Products} from './../../Models/app.newProduct.model'; 
@Component({
    selector: 'product-data',
    templateUrl: './app.product.html'
})
export class ProductComponet implements OnInit {
    products = Products
    _filterProduct:Array< Product >;
    _categoryName:string;
   
  @Output()
  close = new EventEmitter();

  public closeDetails() {
      this.close.emit(null);
  }


  @Input()
  set categoryName(cname: string) {
    this._categoryName = (cname && cname.trim()) || 'No Category Selected';
  }
  get categoryName() { 
      return this._categoryName; 
  }    
 
    constructor() { 
         this._filterProduct = new Array< Product >();
         console.log('Product');
    } 
 
  get filterProducts() { 
           this._filterProduct = new Array< Product >();
          for(let e of Products){
            if(e.categoryName==this._categoryName){
                this._filterProduct.push(e);
            }
        } 
      return this._filterProduct; 
    }
 
    ngOnInit() { }
}