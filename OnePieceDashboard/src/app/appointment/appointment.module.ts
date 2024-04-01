import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BookingComponent } from './booking/booking.component';

@NgModule({
  declarations: [BookingComponent],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    MatSidenavModule
  ]
})
export class AppointmentModule { }
