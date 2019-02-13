export interface Item {
    itemId: string;
    name: string;
    unitPrice: number;
    category: string;
}

export var items: Item[] = [];

items.push(
    { itemId: "I001", name:"Trimmer", unitPrice: 1700, category:"Cosmetic" },
    { itemId: "I002", name:"Chilli Powder", unitPrice: 50, category:"Food" },
    { itemId: "I003", name:"Head Phone", unitPrice: 2000, category:"Electronics" },
    { itemId: "I004", name:"Coffe Maker", unitPrice: 500, category:"Kitchen" },
    { itemId: "I005", name:"T Shirt", unitPrice: 1000, category:"Clothing" },
    { itemId: "I006", name:"Shampoo", unitPrice: 200, category:"Cosmetic" },
    { itemId: "I007", name:"Mango", unitPrice: 60, category:"Food" },
    { itemId: "I008", name:"Bluetooth Mouse", unitPrice: 2500, category:"Electronics" },
    { itemId: "I009", name:"Vegetable Chopper", unitPrice: 500, category:"Kitchen" },
    { itemId: "I010", name:"Leather Jacket", unitPrice: 10000, category:"Clothing" },
    { itemId: "I011", name:"tooteh Brush", unitPrice: 100, category:"Cosmetic" },
    { itemId: "I012", name:"Tea Dust", unitPrice: 100, category:"Food" },
    { itemId: "I013", name:"Selfi Stick", unitPrice: 5000, category:"Electrnics" },
    { itemId: "I014", name:"Mixer Grider", unitPrice: 4500, category:"Kitchen" },
    { itemId: "I015", name:"Fromal shirt", unitPrice: 1500, category:"Clothing" }
)