import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { LoginEmployeeComponent } from './login-employee/login-employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { WatchlaterComponent } from './watchlater/watchlater.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateEmployeeComponent,
    LoginEmployeeComponent,
    DashboardComponent,
    FavouriteComponent,
    WatchlaterComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
