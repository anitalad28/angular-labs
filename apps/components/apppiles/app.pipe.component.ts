import { Component, OnInit } from '@angular/core';
import { Product } from '../../Models/app.product.model';

@Component({
    selector: 'app-piped-component',
    template: `
    <div class="container">
        <strong>The Angular Pipes</strong>
    </div>
    <br>
    <input type='text' [value]='name | uppercase' class='form-control'>
    <br>
    <div class="container">
       <span>{{ name | uppercase }}</span>
       <br />
       <span>{{ name | lowercase }}</span>
    </div>
    <br>
    <div class="container">
       <span>{{ dob | date: 'short' }}</span>
       <br />
       <span>{{ dob | date: 'medium' }}</span>
       <br />
       <span>{{ dob | date: 'full' }}</span>
       <br />
       <span>{{ dob | date: 'M/dd/yy' }}</span>
    </div>
    <br />
    <div class="container">
       <span>{{ salary | currency:'INR' }}</span>
    </div>
    <br />
    <div class="container">
       <span>{{ prd | json }}</span>
    </div>

    `
})
export class PipeComponent implements OnInit {
    name: String;
    dob: Date;
    salary: Number;
    prd: Product;

    constructor() {
        this.name = "Harbinger Systems!!";
        this.dob = new Date(2019, 1, 2);
        this.salary = 15000;

        this.prd = new Product('12345', 10001, 'P1','C1','M1', 4444 );
     }

    ngOnInit(): void { }
}
