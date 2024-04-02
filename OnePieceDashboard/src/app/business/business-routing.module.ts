import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { BusinessCenterComponent } from './business-center/business-center.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { BillingComponent } from './billing/billing.component';

const businessRoutes: Routes = [
  {
    path: '',
    component: BusinessCenterComponent,
    children: [
      {
        path: 'appointment',
        component: AppointmentComponent,
      },
      {
        path: 'customers',
        component: AllCustomersComponent,
      },
      {
        path: 'billing',
        component: BillingComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(businessRoutes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
