import { RouterModule, Routes } from "@angular/router";
import { UserLoginComponent } from "./app.userlogin.component";
import { UserRegistrationComponent } from "./app.useregister.component";
import { ErrorComponent } from "../routerComponent/app.error.component";
import { ModuleWithProviders } from "@angular/core";
import { ProductServiceComponent } from "../productservicecomponenet/app.productservice.component";

const routes:Routes = [
    { path: "login", component:UserLoginComponent},
    { path: "register", component:UserRegistrationComponent},
    { path: "", redirectTo:"login", pathMatch: "full"},
    { path: "product", component:ProductServiceComponent},
    { path: "error", component: ErrorComponent  } 
]

//register the routeTable for root of the current angular app
// When "routig is provided " to imports of NgModule
export const userrouting:ModuleWithProviders = RouterModule.forRoot(routes);