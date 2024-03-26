import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { BaseStationComponent } from './home/base-station/base-station.component';

export const routes: Routes = [
    {path:"login",loadChildren:()=> import("./authentication/authentication.module").then((m)=>m.AuthenticationModule)},
    {path:"home",loadChildren:()=> import("./home/home.module").then((m)=>m.HomeModule)},
    {path:"",component:BaseStationComponent},
];
