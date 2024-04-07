import { NgModule } from '@angular/core';
import { CommonModule, DecimalPipe, TitleCasePipe } from '@angular/common';

import { BusinessRoutingModule } from './business-routing.module';
import { CustomerComponent } from './components/customer/customer.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BusinessCenterComponent } from './business-center/business-center.component';
import { HlmSeparatorDirective } from '@spartan-ng/ui-separator-helm';
import { BrnSeparatorComponent } from '@spartan-ng/ui-separator-brain';
import { MatIconModule } from '@angular/material/icon';
import {
  HlmButtonDirective,
  HlmButtonModule,
} from '@spartan-ng/ui-button-helm';
import { BookingsComponent } from './bookings/bookings.component';
import { AllCustomersComponent } from './all-customers/all-customers.component';
import { BillingComponent } from './billing/billing.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { AppointmentListComponent } from './components/appointment-list/appointment-list.component';
import { FormsModule } from '@angular/forms';
import { BrnMenuTriggerDirective } from '@spartan-ng/ui-menu-brain';
import { HlmMenuBarComponent, HlmMenuBarItemDirective, HlmMenuComponent, HlmMenuGroupComponent, HlmMenuItemCheckComponent, HlmMenuItemCheckboxDirective, HlmMenuItemDirective, HlmMenuItemIconDirective, HlmMenuItemRadioComponent, HlmMenuItemRadioDirective, HlmMenuItemSubIndicatorComponent, HlmMenuLabelComponent, HlmMenuModule, HlmMenuSeparatorComponent, HlmMenuShortcutComponent, HlmSubMenuComponent } from '@spartan-ng/ui-menu-helm';
import { BrnSelectModule } from '@spartan-ng/ui-select-brain';
import { HlmSelectModule } from '@spartan-ng/ui-select-helm';
import { BrnTableModule } from '@spartan-ng/ui-table-brain';
import { HlmTableModule } from '@spartan-ng/ui-table-helm';
import { HlmCheckboxCheckIconComponent } from '../../../libs/ui/ui-checkbox-helm/src/lib/hlm-checkbox-checkicon.component';
import { HlmCheckboxComponent } from '../../../libs/ui/ui-checkbox-helm/src/lib/hlm-checkbox.component';
import { HlmIconComponent } from '../../../libs/ui/ui-icon-helm/src/lib/hlm-icon.component';
import { HlmInputDirective } from '../../../libs/ui/ui-input-helm/src/lib/hlm-input.directive';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import {MatTooltipModule} from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AllCustomersComponent,
    BusinessCenterComponent,
    CustomerComponent,
    AppointmentComponent,
    BookingsComponent,
    BillingComponent,
    InvoiceComponent,
    AppointmentListComponent,
  ],
  imports: [
    MatButtonModule,
    CommonModule,
    BusinessRoutingModule,
    MatTableModule,
    MatSidenavModule,
    HlmSeparatorDirective,
    BrnSeparatorComponent,
    MatIconModule,
    HlmButtonDirective,
    FormsModule,
    BrnMenuTriggerDirective,
    HlmMenuModule,
    BrnTableModule,
    HlmTableModule,
    HlmButtonModule,
    DecimalPipe,
    TitleCasePipe,
    HlmIconComponent,
    HlmInputDirective,
    HlmCheckboxCheckIconComponent,
    HlmCheckboxComponent,
    BrnSelectModule,
    HlmSelectModule,
    HlmMenuBarComponent,
    HlmMenuBarItemDirective,
    HlmMenuComponent,
    HlmMenuGroupComponent,
    HlmMenuItemCheckboxDirective,
    HlmMenuItemCheckComponent,
    HlmMenuItemDirective,
    HlmMenuItemIconDirective,
    HlmMenuItemRadioComponent,
    HlmMenuItemRadioDirective,
    HlmMenuItemSubIndicatorComponent,
    HlmMenuLabelComponent,
    HlmMenuSeparatorComponent,
    HlmMenuShortcutComponent,
    HlmSubMenuComponent,
    MatTooltipModule
  ],
})
export class BusinessModule {}
