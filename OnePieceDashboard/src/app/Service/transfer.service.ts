import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { info } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class TransferService {

  constructor() { }

  private sideNavTransport = new BehaviorSubject<info[]|null>(null);
  sideNavInfo$ = this.sideNavTransport.asObservable();

  sendNavInfo(info:info[]){
    this.sideNavTransport.next(info);
  }

}
