import { Order, orders } from "../../Models/order.model";
import { Item } from "../../Models/item.model";
import { Component } from "@angular/core";

@Component({
    selector: 'orders',
    templateUrl: './app.orders.html'
})

export class OrdersComponent {
    public orders: Order[];
    public itemInSelectedOrder: Item[];

    constructor(){
        this.orders = orders;
    }

    public viewDetails( order: Order){
        console.log(" order:- " + order);
        this.itemInSelectedOrder = order.getItemsOrdered();
    }

}
