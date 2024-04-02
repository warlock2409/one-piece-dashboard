import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface nav {
  name:string;
  icon:string;
  url:string;
  info:info[];
}

export interface info{
  name:string;
  icon?:string;
  url:string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  getSideNav():Observable<any[]>{
    return of(this.sideNav);
  }

  sideNav:nav[]=[
    {
      name:"Home",
      icon:"storefront",
      url:"business",
      info:[
        {name:"Bookings",icon:"",url:"business"},
        {name:"Customer",icon:"",url:"business/customer"}
      ]
    },{
      name:"Calendar",
      icon:"event_available",
      url:"calendar",
      info:[
        {name:"Business",icon:"",url:"/business"}
      ]
    },{
      name:"Settings",
      icon:"settings",
      url:"settings",
      info:[
        {name:"Business",icon:"",url:"/business"}
      ]
    },
  ]

}
