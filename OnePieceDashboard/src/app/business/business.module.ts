import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { CustomerComponent } from './customer/customer.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BusinessCenterComponent } from './business-center/business-center.component';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [BusinessCenterComponent,CustomerComponent,AppointmentComponent],
  imports: [
    CommonModule,
    BusinessRoutingModule,
    MatSidenavModule,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    MatIconModule
  ]
})
export class BusinessModule { }
