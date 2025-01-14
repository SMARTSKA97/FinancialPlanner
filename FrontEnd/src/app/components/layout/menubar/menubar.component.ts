import { Component, OnInit } from '@angular/core';
import { MegaMenuItem, MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { BadgeModule } from 'primeng/badge';
import { AvatarModule } from 'primeng/avatar';
import { InputTextModule } from 'primeng/inputtext';
import { CommonModule } from '@angular/common';
import { Ripple } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { RouterLink } from '@angular/router';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { LoginComponent } from '../../login/login.component';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menubar',
  imports: [Menubar, BadgeModule, AvatarModule, InputTextModule, CommonModule, Ripple, ButtonModule],
  templateUrl: './menubar.component.html',
  styleUrl: './menubar.component.scss'
})
export class MenubarComponent implements OnInit {
  items: MenuItem[] | undefined;
  constructor(private router: Router) { }
  ngOnInit() {
    this.items = [
      {
        label: 'Dashboard',
        icon: 'pi pi-home',
        command: () => { this.router.navigate(['/dashboard']); }
      },
      {
        label: 'Finance',
        icon: 'pi pi-search',
        badge: '4',
        items: [
          {
            label: 'Income',
            icon: 'pi pi-bolt',
            command: () => { this.router.navigate(['/income']); }
          },
          {
            label: 'Expense',
            icon: 'pi pi-server',
            command: () => { this.router.navigate(['/expense']); }
          },
          {
            separator: true,
          },
          {
            label: 'Investments',
            icon: 'pi pi-pencil',
            command: () => { this.router.navigate(['/investment']); }
          },
          {
            label: 'Savings',
            icon: 'pi pi-pencil',
            command: () => { this.router.navigate(['/saving']); }
          },
        ],
      },
      {
        label: 'Logout',
        icon: 'pi pi-home',
        command: () => { this.router.navigate(['/login']); }
      },
    ];
  }
}

