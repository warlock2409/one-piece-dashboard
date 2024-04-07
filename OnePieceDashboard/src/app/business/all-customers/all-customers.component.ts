import { Component } from '@angular/core';
import { DataSource } from '../../Service/data.service';

class CustomerDataSource implements DataSource{
  data: any[];
  columns: any[];
  
  constructor(customerList:any[],col:any[]){
    this.data = customerList;
    this.columns = col;
  }

}

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
  {position: 1, name: 'paradox2cr@gmail.com',user:"Rajaraman", weight: 1.0079,service:"", symbol: 'H',from:"April 7 2023",to:"April 8 Mon"},
  {position: 2, name: 'paradox2cr@gmail.com',user:"Rajaraman", weight: 4.0026, service:"",symbol: 'He',from:"April 7 2023",to:"April 8 Mon"},
  {position: 3, name: 'paradox2cr@gmail.com', user:"Rajaraman",weight: 6.941,service:"", symbol: 'Li',from:"April 7 2023",to:"April 8 Mon"},
  {position: 4, name: 'paradox1cr@gmail.com',user:"Rajaraman", weight: 9.0122, service:"",symbol: 'Be',from:"April 7 2023",to:"April 8 Mon"},
  {position: 5, name: 'paradox2cr@gmail.com', user:"Rajaraman",weight: 10.811,service:"", symbol: 'B',from:"April 7 2023",to:"April 8 Mon"},
  {position: 6, name: 'paradox2cr@gmail.com',user:"Rajaraman", weight: 12.0107, service:"",symbol: 'C',from:"April 7 2023",to:"April 8 Mon"},
  {position: 7, name: 'paradox2cr@gmail.com',user:"Rajaraman", weight: 14.0067, service:"",symbol: 'N',from:"April 7 2023",to:"April 8 Mon"},
  {position: 8, name: 'paradox2cr@gmail.com',user:"Rajaraman", weight: 15.9994,service:"", symbol: 'O',from:"April 7 2023",to:"April 8 Mon"},
  {position: 9, name: 'paradox2cr@gmail.com',user:"Rajaraman", weight: 18.9984,service:"", symbol: 'F',from:"April 7 2023",to:"April 8 Mon"},
  {position: 10, name: 'paradox2cr@gmail.com',user:"Rajaraman", weight: 20.1797,service:"", symbol: 'Ne',from:"April 7 2023",to:"April 8 Mon"},
];

const displayedColumns: string[] = ['user','name','weight','joined','actions'];

@Component({
  selector: 'app-all-customers',
  standalone: false,
  templateUrl: './all-customers.component.html',
  styleUrl: './all-customers.component.scss'
})
export class AllCustomersComponent {
  book:boolean=false;
  customerList!:any[];
  columns!:any[];
  customerDataSource!:DataSource;

  constructor(){
    this.customerDataSource = new CustomerDataSource(ELEMENT_DATA,displayedColumns);
  }

}
