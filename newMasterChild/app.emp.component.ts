import { Component, OnInit } from '@angular/core';
import { Employee, Employees } from './app.emp.model';


@Component({
    selector: 'app-emp-component',
    templateUrl: `<table>
    <td>Emp NAme</td>
    <tr ngFor = "let e of emps">
    <td>
    {{ e.EmpName }}
    </td>
    </tr>
    </tabel>
    `
})
export class EmplyoeeComponent implements OnInit {
    private emp: Employee;
  //  private emp =  Employees;

    private dno:number;
    private eps: Array<Employee>;
    constructor() { 
        this.dno = 0;
        this.eps = new Array<Employee>();
    }

    ngOnInit(): void { }
}
