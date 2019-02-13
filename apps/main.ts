// 1. Angular module file
import { NgModule } from '@angular/core';

// 2. Import all standard modules
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from "@angular/http";

// 3. Import all components and directives
import { SimpleComponent } from "./components/simplecomponent/app.simple.component";
import { ProductComponent } from "./components/productcomponenet/app.product.component";
import { ProductFormComponent } from "./components/productformcomponent/app.productform.component";
import { SampleServiceComponent } from "./components/sampleServiceComponent/app.sampleservice.component"
import { ProductServiceComponent } from "./components/productservicecomponenet/app.productservice.component";
import { CategoryComponent } from "./components/productmastercomponent/app.category.component";
import { ProductComponet } from "./components/productmastercomponent/app.product.component";

// 4. Import all services
import { SampleService } from "./services/app.sample.service";
import { ProductService } from "./services/app.product.service";
import { UserService } from "./services/app.user.service";
import { from } from 'rxjs';
import { HomeComponent } from './components/routerComponent/app.home.component';
import { AboutComponent } from './components/routerComponent/app.about.component';
import { ContactComponent } from './components/routerComponent/app.contact.component';
import { routing } from "./components/routerComponent/app.route.table";
import { MainComponent } from './components/routerComponent/app.main.component';
import { AppGaurdService } from './services/app.test.gaurd.service';
import { ErrorComponent } from './components/routerComponent/app.error.component';
import { OrdersAppComponent } from './components/productOutputComponent/app.ordersapp.component';
import { OrdersComponent } from './components/productOutputComponent/app.orders.component';
import { UserLoginComponent } from './components/userRouterComponent/app.userlogin.component';
import { UserErrorComponent } from './components/userRouterComponent/app.usererror.component';
import { userrouting } from './components/userRouterComponent/app.userroute.table';
import { UserRegistrationComponent } from './components/userRouterComponent/app.useregister.component';
import { UserMainComponent } from './components/userRouterComponent/app.usermain.component';
import { PipeComponent } from './components/apppiles/app.pipe.component';

@NgModule({
    imports:[BrowserModule,FormsModule,ReactiveFormsModule,HttpModule, routing, userrouting],
    declarations:[
                    ProductFormComponent,
                    ProductComponent,
                    SimpleComponent,
                    SampleServiceComponent,
                    ProductServiceComponent,
                    CategoryComponent,
                    ProductComponet,
                    HomeComponent,
                    AboutComponent,
                    ContactComponent,
                    MainComponent,
                    ErrorComponent,
                    OrdersAppComponent,
                    OrdersComponent,
                    UserLoginComponent,
                    UserErrorComponent,
                    UserRegistrationComponent,
                    UserMainComponent,                    
                    PipeComponent            
                ],
    providers:[SampleService,ProductService, AppGaurdService, UserService],
    bootstrap:[PipeComponent]
}) 

export class AppModule {}

// 5. Making the app module as bootstrap
platformBrowserDynamic().bootstrapModule(AppModule);