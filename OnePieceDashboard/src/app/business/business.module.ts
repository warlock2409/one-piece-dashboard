import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BusinessCenterComponent } from './business-center/business-center.component';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { MatIconModule } from '@angular/material/icon';
import { HlmButtonDirective } from '@spartan-ng/ui-button-helm';
import { BookingsComponent } from './bookings/bookings.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { BillingComponent } from './billing/billing.component';
import { InvoiceComponent } from './invoice/invoice.component';

@NgModule({
  declarations: [
    AllCustomersComponent,
    BusinessCenterComponent,
    CustomerComponent,
    AppointmentComponent,
    BookingsComponent,
    BillingComponent,
    InvoiceComponent
  ],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    MatSidenavModule,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    MatIconModule,
    HlmButtonDirective,
  ],
})
export class BusinessModule {}
