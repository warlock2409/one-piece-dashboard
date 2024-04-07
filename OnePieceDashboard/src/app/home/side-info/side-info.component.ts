import { Component, inject } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';
import { TransferService } from '../../Service/transfer.service';
import { info } from '../../Service/data.service';

@Component({
  selector: 'app-side-info',
  standalone: false,
  templateUrl: './side-info.component.html',
  styleUrl: './side-info.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class SideInfoComponent {
  selected: Date= new Date();
  dataTransporter=inject(TransferService);
  info!:info[] ;

  constructor(){
    this.dataTransporter.sideNavInfo$.subscribe(data =>{
      if(data != null)  
        this.info = data;
    })

    console.log(this.selected);
    
  }

  dateChanged(event:Date){
    console.log(event,"Date");
    this.dataTransporter.sendInfoDate(event);
  }

}
