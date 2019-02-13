import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-about-component',
    template: `
    <h2>About Component</h2>
    <div class="container"> {{ message }}</div>
    <br />
    <div class="container">The Value is: {{ value }}</div>
    <br />
    <input type="button" value="Navigate to Contact" (click)="navigateToContact()">
    `
})
export class AboutComponent implements OnInit {
    message: string;
    value: number;
    // The injection of Router and activatedRoute will fetch 
    // Router object from RouterModule imported ngMdoudule using "routing"
    constructor( private router:Router, private act:ActivatedRoute) {
        this.message = "I am About Component";
    }

    navigateToContact(): void {
        this.router.navigate(["contact"]);
    }

    //subscribe to parameter on activatedRoute object
    ngOnInit(): void { 
        this.act.params.subscribe((params)=>{
            this.value = params.id;
        });
    }
}
