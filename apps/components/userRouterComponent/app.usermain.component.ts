import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-usermain-component',
    template: `
    <table class="table table-bordered table-stripper">
        <tr>
            <td>
              <a [routerLink]="['login']">Login</a>
            </td>
            <td>
               <a [routerLink]="['register']">Register</a>
            </td>
            <td>
            <a [routerLink]="['product']">Product</a>
            </td>
        </tr>
    </table>
    <hr>
    <router-outlet></router-outlet>
    `
})
export class UserMainComponent implements OnInit {
    id: number;
    constructor() {
        this.id = 1000;
     }

    ngOnInit(): void { }
}
