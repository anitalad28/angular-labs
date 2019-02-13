import { RouterModule, Routes } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";
import { HomeComponent } from "./app.home.component";
import { AboutComponent } from "./app.about.component";
import { ContactComponent } from "./app.contact.component";
import { ProductComponent } from "../productcomponenet/app.product.component";
import { AppGaurdService } from "../../services/app.test.gaurd.service";
import { ErrorComponent } from "./app.error.component";

// Define route table
// const routes:Routes = [
//     { path: '', component:HomeComponent},
//     { path: 'about/:id', component:AboutComponent},
//     { path: 'contact', component:ContactComponent,
//     children : [
//                     { path: 'product', component:ProductComponent}
//                 ]
//     }
//    ];

const routes:Routes = [
    { path: 'home', component:HomeComponent},
    { path: 'about/:id', component:AboutComponent},
    { 
        path: 'contact', 
        component:ContactComponent ,
        canActivate: [AppGaurdService]
    },
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
    } ,
    {
        path: "error",
        component: ErrorComponent
    }  
   ];
//register the routeTable for root of the current angular app
// When "routig is provided " to imports of NgModule
export const routing:ModuleWithProviders = RouterModule.forRoot(routes);