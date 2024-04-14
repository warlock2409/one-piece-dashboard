import { Component } from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';


@Component({
  selector: 'app-bookings',
  standalone: false,
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.scss'
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

}
