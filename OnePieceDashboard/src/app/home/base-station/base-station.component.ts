import { Component, inject } from '@angular/core';
import { DataService, nav } from '../../Service/data.service';
import { Observable, from } from 'rxjs';

@Component({
  selector: 'app-base-station',
  standalone: false,
  templateUrl: './base-station.component.html',
  styleUrl: './base-station.component.scss'
})
export class BaseStationComponent {
 
  navElements$!: Observable<nav[]>; // Define navElements$ as Observable

  constructor(private dataSource: DataService) {}

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this.navElements$ = this.dataSource.getSideNav();
  }

 
}
