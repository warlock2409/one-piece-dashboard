import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { BusinessCenterComponent } from './business-center/business-center.component';
import { CustomerComponent } from './customer/customer.component';


const routes: Routes = [
  { path: "", component: BusinessCenterComponent, 
    children: [
      { path: "booking", component:AppointmentComponent},
      { path: "customer", component:CustomerComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessRoutingModule { }
