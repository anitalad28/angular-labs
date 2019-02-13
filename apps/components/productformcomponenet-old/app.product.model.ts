export class Product{
    constructor(
        public productId:number,
        public productName:string,
        public categoryName:string,
        public price:number
    ){}
}

export const Categories:string[] = ["Electronics","Electrical","Food"];
export const Products:Array<Product> = new Array<Product>();

Products.push( new Product(101, "Laptop1", "Electronics", 12000));
Products.push( new Product(102, "Wire", "Electrical", 800));
Products.push( new Product(103, "Laptop", "Electronics", 900));
