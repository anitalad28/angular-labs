import { Item, items } from "./item.model";

export interface itemInOrder {
    itemId: string;
    count: number;
}

export class Order {
   constructor( 
        public orderId: number,
        public orderDate: any,
        public delivered: boolean,
        public deliveryDate: any,
        public items: itemInOrder[]
   ){};

   get DeliveryStatus(): string {
       return this.delivered ? "Yes" : "No";
   }

   totalPrice(): number {
       var totalPrice: number = 0;
       for( let itemOrdered of this.items ){
           for( var item of items){
               if( item.itemId == itemOrdered.itemId ) {
                   totalPrice += item.unitPrice * itemOrdered.count;
               }
           }
       }

       return totalPrice;
   }

   getItemsOrdered(): Item[] {
       var itemsOrdered: Item[] = [];

       for( let itemOrdered of this.items ){
        for( var item of items) {
            //console.log("item.itemId - " + item.itemId );
            //console.log("itemOrdered.itemId - " + itemOrdered.itemId );
            if( item.itemId == itemOrdered.itemId ) {
                itemsOrdered.push(item);
            }
        }
    }

    return itemsOrdered;
   }
}

export var orders: Order[] = [];
orders.push(
    new Order(1, "20-04-2016", true, "22-04-2016", 
    [
        { itemId: "I001", count: 1 },
        { itemId: "I005", count: 2 },
        { itemId: "I013", count: 1 },
        { itemId: "I007", count: 3 },
    ]
));

orders.push(
    new Order(2, "21-04-2016", true, "24-04-2016", 
    [
        { itemId: "I002", count: 1 },
        { itemId: "I015", count: 2 },
        { itemId: "I004", count: 1 },
        { itemId: "I006", count: 3 },
    ]
));

orders.push(
    new Order(3, "22-04-2016", true, "22-04-2016", 
    [
        { itemId: "I009", count: 1 },
        { itemId: "I010", count: 2 },
        { itemId: "I008", count: 1 }
       
    ]
));

orders.push(
    new Order(4, "24-04-2016", true, "27-04-2016", 
    [
        { itemId: "I011", count: 1 },
        { itemId: "I003", count: 2 },
        { itemId: "I015", count: 1 }
    ]
));

orders.push(
    new Order(5, "24-04-2016", true, "26-04-2016", 
    [
        { itemId: "I009", count: 1 },
        { itemId: "I010", count: 2 },
        { itemId: "I012", count: 1 },
        { itemId: "I007", count: 3 },
    ]
));