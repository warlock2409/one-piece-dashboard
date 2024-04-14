import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import { provideIcons } from '@ng-icons/core';
import {
  lucideCalendar,
  lucideWallet,
  lucideSmile,
  lucideCog,
  lucideSearch,
  lucideUser,
  lucidePlus,
} from '@ng-icons/lucide';

@Component({
  selector: 'app-bookings',
  standalone: false,
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss',
  providers: [
    provideIcons({ lucideSearch, lucideCalendar, lucideSmile, lucidePlus, lucideUser, lucideWallet, lucideCog }),
  ]
})
export class BookingsComponent {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  myControl = new FormControl('');
  options: string[] = ['One', 'Two', 'Three'];

  constructor(private _formBuilder: FormBuilder) {}

  existingCustomer:boolean = false;
  existingPet:boolean = true;


  /**
   * The function `changeCustomerState` toggles the value of `existingCustomer` based on the input
   * `state`.
   * @param {string} state - The `state` parameter is a string that represents the state of a customer.
   * It can have the value 'new' or any other value.
   */
  changeCustomerState(state:string){
    if(state == 'new'){
      this.existingCustomer = false;
    }else if(state == 'exist'){
      this.existingCustomer = true;
    }else if(state == 'newPet'){
      this.existingPet = false;
    }else if(state == 'existPet'){
      this.existingPet = true;
    }
  }

}
