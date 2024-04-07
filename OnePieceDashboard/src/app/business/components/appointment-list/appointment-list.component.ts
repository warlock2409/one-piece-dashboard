import { Component} from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { lucideChevronDown, lucideMoreHorizontal, lucideArrowUpDown } from '@ng-icons/lucide';

export interface PeriodicElement {
  name: string;
  position: number;
  user:string
  weight: number;
  service:string;
  symbol: string;
  from:string;
  to:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'paradox2cr@gmail.com',user:"ram", weight: 1.0079,service:"", symbol: 'H',from:"April 7 Sun",to:"April 8 Mon"},
  {position: 2, name: 'paradox2cr@gmail.com',user:"ram", weight: 4.0026, service:"",symbol: 'He',from:"April 7 Sun",to:"April 8 Mon"},
  {position: 3, name: 'paradox2cr@gmail.com', user:"ram",weight: 6.941,service:"", symbol: 'Li',from:"April 7 Sun",to:"April 8 Mon"},
  {position: 4, name: 'paradox1cr@gmail.com',user:"ram", weight: 9.0122, service:"",symbol: 'Be',from:"April 7 Sun",to:"April 8 Mon"},
  {position: 5, name: 'paradox2cr@gmail.com', user:"ram",weight: 10.811,service:"", symbol: 'B',from:"April 7 Sun",to:"April 8 Mon"},
  {position: 6, name: 'paradox2cr@gmail.com',user:"ram", weight: 12.0107, service:"",symbol: 'C',from:"April 7 Sun",to:"April 8 Mon"},
  {position: 7, name: 'paradox2cr@gmail.com',user:"ram", weight: 14.0067, service:"",symbol: 'N',from:"April 7 Sun",to:"April 8 Mon"},
  {position: 8, name: 'paradox2cr@gmail.com',user:"ram", weight: 15.9994,service:"", symbol: 'O',from:"April 7 Sun",to:"April 8 Mon"},
  {position: 9, name: 'paradox2cr@gmail.com',user:"ram", weight: 18.9984,service:"", symbol: 'F',from:"April 7 Sun",to:"April 8 Mon"},
  {position: 10, name: 'paradox2cr@gmail.com',user:"ram", weight: 20.1797,service:"", symbol: 'Ne',from:"April 7 Sun",to:"April 8 Mon"},
];

@Component({
  selector: 'app-appointment-list',
  standalone: false,
  templateUrl: './appointment-list.component.html',
  styleUrl: './appointment-list.component.scss',
  providers: [provideIcons({ lucideChevronDown, lucideMoreHorizontal, lucideArrowUpDown })],
})
export class AppointmentListComponent {
  displayedColumns: string[] = ['position', 'name', 'user','weight','services','from','to','symbol','actions'];
  dataSource = ELEMENT_DATA;
}
