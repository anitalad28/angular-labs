import { Component, OnInit } from "@angular/core";
import { UserService } from "../../services/app.user.service";
import { User } from "../../Models/app.user.model";
import { Response } from "@angular/http";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-userlogin-component',
    templateUrl: "./app.userlogin.view.html"
})

export class UserLoginComponent implements OnInit {

    user:User;

    constructor( private serv: UserService, private router:Router, private act:ActivatedRoute ){
        this.user = new User("","");
    }
    // Constructor method will be immedicatly invoked after the constructor
   
    //subscribe to parameter on activatedRoute object
    ngOnInit(): void { 
        // this.act.params.subscribe((params)=>{
        //     this.value = params.id;
        // });
    }

    authenticateUser():void{
        console.log("I am here" + JSON.stringify(this.user));

        // Make call to 
        this.serv.authUser(this.user).subscribe(
            (resp:Response)=>{
               // this.products = resp.json().data;
                console.log("Service Response authenticated - " + resp.json().authenticated);
                console.log("Service Response message: " + resp.json().message);
                console.log("Service Response token:" + resp.json().token);
                sessionStorage.setItem('token', resp.json().token);
                this.navigateToProduct();
            },
           error => {
               console.log(`Error occurred ${error}`);
           }
       );
    }

    navigateToProduct(): void {
        this.router.navigate(["product"]);
    }
}