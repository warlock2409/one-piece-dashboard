import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-appointment',
  standalone: false,
  templateUrl: './appointment.component.html',
  styleUrl: './appointment.component.scss'
})
export class AppointmentComponent {
  @ViewChild('drawer') drawer!: MatDrawer;

  constructor(private router: Router) {
    // Subscribe to router events to detect route changes
    
  }

  ngAfterViewInit(): void {
    this.router.events.pipe(filter((event): event is NavigationEnd => event instanceof NavigationEnd)).subscribe((event: NavigationEnd) => {
      if (!event.url.includes('secondRouter')) {
        this.drawer.close();
      }else{
        this.drawer.open();
      }
    });
  }
}
