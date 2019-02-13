import { Component } from "@angular/core";
import { Order } from "./../../Models/order.model";

@Component({
    selector: "orders-list",
    templateUrl: "app.orderlist.component.html"
})

export class OrderlistComponent {
    public orders: Order[];
    public selectedorder: Order;

    // constructor(){
    //     this.orders = orders;
    // }

    // public viewDetails(){
    //     this.selectedorder = selectedorder;
    // }
}