import { Component } from '@angular/core';
import { provideNativeDateAdapter } from '@angular/material/core';

@Component({
  selector: 'app-side-info',
  standalone: false,
  templateUrl: './side-info.component.html',
  styleUrl: './side-info.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class SideInfoComponent {
  selected!: Date | null;
}
