import { Component } from '@angular/core';
import { MenubarComponent } from '../layout/menubar/menubar.component';

@Component({
  selector: 'app-dashboard',
  imports: [MenubarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
