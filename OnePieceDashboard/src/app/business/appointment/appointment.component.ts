import { Component, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { TransferService } from '../../Service/transfer.service';
import { DataSource } from '../../Service/data.service';

enum View{
  KANBAN,LIST
}

export class SelectedDate {
  day: string;
  date: number;
  year: number;
  month: string;

  constructor(date: Date) {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    this.day = days[date.getDay()];
    this.date = date.getDate();
    this.year = date.getFullYear();
    this.month = months[date.getMonth()];
  }
}

class AppointmentDataSource implements DataSource{
  data: any[];
  columns: any[];
  
  constructor(appointmentList:any[],col:any[]){
    this.data = appointmentList;
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
  {position: 1, name: 'john@example.com', user: 'John', weight: 1.0079, service:"", symbol: 'H', from:"April 7 Sun", to:"April 8 Mon"},
  {position: 2, name: 'alice@example.com', user: 'Alice', weight: 4.0026, service:"", symbol: 'He', from:"April 7 Sun", to:"April 8 Mon"},
  {position: 3, name: 'bob@example.com', user: 'Bob', weight: 6.941, service:"", symbol: 'Li', from:"April 7 Sun", to:"April 8 Mon"},
  {position: 4, name: 'mary@example.com', user: 'Mary', weight: 9.0122, service:"", symbol: 'Be', from:"April 7 Sun", to:"April 8 Mon"},
  {position: 5, name: 'jane@example.com', user: 'Jane', weight: 10.811, service:"", symbol: 'B', from:"April 7 Sun", to:"April 8 Mon"},
  {position: 6, name: 'michael@example.com', user: 'Michael', weight: 12.0107, service:"", symbol: 'C', from:"April 7 Sun", to:"April 8 Mon"},
  {position: 7, name: 'emma@example.com', user: 'Emma', weight: 14.0067, service:"", symbol: 'N', from:"April 7 Sun", to:"April 8 Mon"},
  {position: 8, name: 'david@example.com', user: 'David', weight: 15.9994, service:"", symbol: 'O', from:"April 7 Sun", to:"April 8 Mon"},
  {position: 9, name: 'sophia@example.com', user: 'Sophia', weight: 18.9984, service:"", symbol: 'F', from:"April 7 Sun", to:"April 8 Mon"},
  {position: 10, name: 'olivia@example.com', user: 'Olivia', weight: 20.1797, service:"", symbol: 'Ne', from:"April 7 Sun", to:"April 8 Mon"},
];


@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  displayedColumns: string[] = ['position', 'user','weight','services','from','to','name','symbol','actions'];
  dataSource = ELEMENT_DATA;

  dataTransporter=inject(TransferService);
  @ViewChild('drawer') drawer!: MatDrawer;

  view:View=View.LIST;
  book:boolean=false;
  today!:SelectedDate;
  appointmentDataSource!:DataSource;
  
  constructor(private router: Router) {
    this.dataTransporter.sideInfoDate$.subscribe((date:Date) =>{
      this.today = new SelectedDate(date);
    })

    this.appointmentDataSource = new AppointmentDataSource(ELEMENT_DATA,this.displayedColumns);
  }

 
}
