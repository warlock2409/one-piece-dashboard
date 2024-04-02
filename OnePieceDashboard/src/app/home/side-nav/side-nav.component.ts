import { Component, inject,Input } from '@angular/core';
import { nav } from '../../Service/data.service';
import { TransferService } from '../../Service/transfer.service';

@Component({
  selector: 'app-side-nav',
  standalone: false,
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent {
  
  infoTransporter=inject(TransferService);
  @Input() navElements: nav[]| null = null;

  constructor(){
    
  }

  ngOnInit() {
    console.log(this.navElements, "Side Nav");
    if( this.navElements && this.navElements?.length > 0)
        this.changeNavInfo(this.navElements[0]);
  }

  changeNavInfo(navInfo: nav) {
    this.infoTransporter.sendNavInfo(navInfo.info);
  }


}
