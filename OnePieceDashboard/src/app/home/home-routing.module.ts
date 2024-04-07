import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseStationComponent } from './base-station/base-station.component';
import { AppointmentComponent } from '../business/appointment/appointment.component';
import { CustomerComponent } from '../business/components/customer/customer.component';

const homeRoutes: Routes = [
  { 
    path: "", 
    component: BaseStationComponent, 
    children: [
      { path: "business", loadChildren: () => import("../business/business.module").then((m) => m.BusinessModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(homeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
