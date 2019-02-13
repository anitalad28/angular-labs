import { Component, OnInit } from '@angular/core';
import { Department, Departments } from 
    import { Department, Department } from './app.dept.model';

@Component({
    selector: 'app-dept-component',
    templateUrl: `
    <table>
    <tr>
    <td>
    </td>
    <tr *ngFor="let d of depts" (click)="selectDept(d)">
       <td> {{ d.DeptName}}    </td
    </tr>
    </tabl>
    <app-emp-component></app-emp-component>`
})

export class DepartmentComponent implements OnInit {
    dept: Department;
    depts = Departments;
    constructor() {
        this.dept = new Department(0,'');
     }

    ngOnInit(): void { }

    selectDept(d: Department): void{
        this.dept = d;
    }
}
