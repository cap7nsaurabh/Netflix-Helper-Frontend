import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';

const routes: Routes = [

  {path: 'create-user', component: CreateEmployeeComponent},
  {path: '', redirectTo: 'login-user', pathMatch: 'full'},
  {path: 'login-user', component: LoginEmployeeComponent},
  {path: 'user-dashboard', component:DashboardComponent},
  {path: 'user-fav', component:FavouriteComponent},
  {path: 'user-wl',component:WatchlaterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
