import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { MatDashboardComponent } from './mat-dashboard/mat-dashboard.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [
  { path: "login", component: SigninComponent },
  { path: "dashboard", component: MatDashboardComponent },
  { path: "account", component: DashboardComponent },
  { path: "payments", component: DashboardComponent },
  { path: "", component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
