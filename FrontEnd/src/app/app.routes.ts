import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { IncomeComponent } from './components/income/income.component';
import { ExpenseComponent } from './components/expense/expense.component';
import { InvestmentComponent } from './components/investment/investment.component';
import { SavingComponent } from './components/saving/saving.component';

export const routes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'income', component: IncomeComponent },
    { path: 'expense', component: ExpenseComponent },
    { path: 'investment', component: InvestmentComponent },
    { path: 'saving', component: SavingComponent },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
];
