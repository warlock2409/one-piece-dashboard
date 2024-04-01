import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseStationComponent } from './base-station/base-station.component';

const routes: Routes = [
  { path: "", component: BaseStationComponent, 
    children: [
      { path: "business", loadChildren: () => import("../business/business.module").then((m) => m.BusinessModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
