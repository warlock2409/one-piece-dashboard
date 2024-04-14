import { Component, Input } from '@angular/core';
import { DataSource } from '../../../Service/data.service';
import { lucideArrowUpDown, lucideChevronDown, lucideMoreHorizontal } from '@ng-icons/lucide';
import { provideIcons } from '@ng-icons/core';

@Component({
  selector: 'app-table-view',
  standalone: false,
  templateUrl: './table-view.component.html',
  styleUrl: './table-view.component.scss',
  providers: [provideIcons({ lucideChevronDown, lucideMoreHorizontal, lucideArrowUpDown })]
})
export class TableViewComponent {
  @Input() dataSource!: DataSource;  
  @Input() width!: string;  

  elementSelected(element:any){
    console.log(element);
    
  }
  
}
