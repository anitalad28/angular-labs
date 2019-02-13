// 1. component is class which contains member functions
import { Component } from '@angular/core';
@Component({
    selector: "app-simple-component",
    template: `
              <h2>HI, I am first angular component!!!</h2>
              <div class="container">
                  <strong>{{ message }}</strong>
              </div>
              <br/>
              <div class="container">
                {{ 100 + 10 }}
              </div>
              <br/>              
              <input type="text" class="form-group" [value]="message"/>
              <br/>
              <a [href]="url" >DevCurry</a>
              <br/>              
              <input type="button" class="btn-success" value="Click Me!" (click)="print()"/>
              <br/>
              <input type="text" class="form-group" [(ngModel)]="fullName"/><br/>
              <input type="text" class="form-group" [(ngModel)]="fullName"/><br/>
              <input type="text" class="form-group" [(ngModel)]="fullName"/><br/>

              <br/>
              Please Enter Value 1: <input type="text" class="form-group" [(ngModel)]="value1"/>
              Please Enter Value 2: <input type="text" class="form-group" [(ngModel)]="value2"/>
              Calculated Value: <input type="text" class="form-group" [value]="calculatedValue"/>
              <input type="button" class="btn-success" value="Subtract!" (click)="calculateSub()"/>
              <input type="button" class="btn-success" value="Add!" (click)="calculateAdd()"/>
              <input type="button" class="btn-success" value="ultiply!" (click)="calculateMultiply()"/>
              <input type="button" class="btn-success" value="Division!" (click)="calculateDivision()"/>
              `
})

export class SimpleComponent {
  message:string;
  name:String;
  url:string;
  fullName:string;
  calculatedValue:number;
  value1:number;
  value2:number;

  constructor() {
    this.message = "Hello Angular 7!!";
    this.name = "Anita Lad";
    this.url = "http://www.devcurry.com";
  }

  print():void{
    this.message = "Button is clicked!!";
  }

  calculateSub():void{
    this.calculatedValue = this.value1 - this.value2;
  }
  calculateAdd():void{
    this.calculatedValue = this.value1 + this.value2;
  }
  calculateMultiply():void{
    this.calculatedValue = this.value1 * this.value2;
  }
  calculateDivision():void{
    this.calculatedValue = this.value1 / this.value2;
  }
}