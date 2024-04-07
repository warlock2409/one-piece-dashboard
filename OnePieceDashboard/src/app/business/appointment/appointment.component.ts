import { Component, ViewChild, inject } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { TransferService } from '../../Service/transfer.service';

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

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  dataTransporter=inject(TransferService);
  @ViewChild('drawer') drawer!: MatDrawer;

  view:View=View.LIST;
  book:boolean=false;
  today!:SelectedDate;
  
  constructor(private router: Router) {
    this.dataTransporter.sideInfoDate$.subscribe((date:Date) =>{
      this.today = new SelectedDate(date);
    })
  }

 
}
