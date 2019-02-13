import { Component, OnInit } from '@angular/core';
import {Category,Categories} from './../../Models/app.newCategory.model';
 
@Component({
    selector: 'category-data',
    templateUrl: './app.category.html'
})
export class CategoryComponent implements OnInit {
    categories=Categories;
    categoryName:string;
    selectedOrder:string;
    constructor() {
        this.categoryName = "";
    }

    selectCategory(c:any){
        console.log("categoryName:" + c.categoryName)
        this.categoryName = c.categoryName
    }
 
    public close(){
        this.selectedOrder = null;
    }
    ngOnInit() { }
}