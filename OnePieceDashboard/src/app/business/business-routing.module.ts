import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { BusinessCenterComponent } from './business-center/business-center.component';
import { CustomerComponent } from './customer/customer.component';
import { InvoiceComponent } from './invoice/invoice.component';

// const businessRoutes: Routes = [
//   {
//     path: 'booking',
//     component: BusinessCenterComponent,
//     children: [
//       {
//         path: '', // empty path to ensure '/business/booking' is included in the URL
//         component: AppointmentComponent,
//       },
//       {
//         path: 'invoice',
//         component: CustomerComponent,
//         outlet: 'secondRouter'
//       },
//     ],
//   },
//   { path: 'invoice', component: InvoiceComponent, outlet: 'secondRouter' },

// ];
const businessRoutes: Routes = [
  {
    path: '',
    component: BusinessCenterComponent,
    children: [
      {
        path: '',
        component: AppointmentComponent,
        children: [
          {
            path: 'invoice',
            component: InvoiceComponent,
            outlet: 'secondRouter',
          },
        ],
      },
      {
        path: 'customer',
        component: CustomerComponent,
        children: [
          {
            path: 'invoice',
            component: InvoiceComponent,
            outlet: 'secondRouter',
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(businessRoutes)],
  exports: [RouterModule],
})
export class BusinessRoutingModule {}
