import { Component } from '@angular/core';
import { MenubarComponent } from "../layout/menubar/menubar.component";

@Component({
  selector: 'app-expense',
  imports: [MenubarComponent],
  templateUrl: './expense.component.html',
  styleUrl: './expense.component.scss'
})
export class ExpenseComponent {

}
