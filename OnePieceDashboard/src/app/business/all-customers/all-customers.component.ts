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
  type:string
}

const ELEMENT_DATA: PeriodicElement[] = [
  { position: 1, name: 'john@example.com', user: 'John', weight: 1.0079, service:"", symbol: 'H', from:"April 7 Sun", to:"April 8 Mon", type: 'customer' },
  { position: 2, name: 'alice@example.com', user: 'Alice', weight: 4.0026, service:"", symbol: 'He', from:"April 7 Sun", to:"April 8 Mon", type: 'customer' },
  { position: 3, name: 'bob@example.com', user: 'Bob', weight: 6.941, service:"", symbol: 'Li', from:"April 7 Sun", to:"April 8 Mon", type: 'customer' },
  { position: 4, name: 'mary@example.com', user: 'Mary', weight: 9.0122, service:"", symbol: 'Be', from:"April 7 Sun", to:"April 8 Mon", type: 'customer' },
  { position: 5, name: 'jane@example.com', user: 'Jane', weight: 10.811, service:"", symbol: 'B', from:"April 7 Sun", to:"April 8 Mon", type: 'customer' },
  { position: 6, name: 'michael@example.com', user: 'Michael', weight: 12.0107, service:"", symbol: 'C', from:"April 7 Sun", to:"April 8 Mon", type: 'customer' },
  { position: 7, name: 'emma@example.com', user: 'Emma', weight: 14.0067, service:"", symbol: 'N', from:"April 7 Sun", to:"April 8 Mon", type: 'customer' },
  { position: 8, name: 'david@example.com', user: 'David', weight: 15.9994, service:"", symbol: 'O', from:"April 7 Sun", to:"April 8 Mon", type: 'customer' },
  { position: 9, name: 'sophia@example.com', user: 'Sophia', weight: 18.9984, service:"", symbol: 'F', from:"April 7 Sun", to:"April 8 Mon", type: 'customer' },
  { position: 10, name: 'olivia@example.com', user: 'Olivia', weight: 20.1797, service:"", symbol: 'Ne', from:"April 7 Sun", to:"April 8 Mon", type: 'customer' },
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
