import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';

export const routes: Routes = [
    {path:"login",loadChildren:()=> import("./authentication/authentication.module").then((m)=>m.AuthenticationModule)},
    {path:"",component:LoginComponent},
];
