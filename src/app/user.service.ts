import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';
import {Usersignin} from './usersignin';
import { Router } from '@angular/router';
//import { AnyMxRecord } from 'dns';


@Injectable({
  providedIn: 'root'
})

export class UserService {

  netflixApi: string;
  apiKey: string;
  loginEndPoint: string;
  registerEndPoint: string;
  favouriteEndPoint: string;
  userresp: any;
  
  recommendedEndPoint: string;

  constructor(private httpClient: HttpClient,  private router: Router) {
    this.netflixApi = '';
    this.apiKey = '';
    this.loginEndPoint = 'http://localhost:8080/user/login';
    this.registerEndPoint = 'http://localhost:8080/user/register';
    this.favouriteEndPoint = '';
    this.recommendedEndPoint = '';
    this.userresp='';
   }
   
   registerUser(newUser: User):Observable<any> {
    const url = this.registerEndPoint;
    return this.httpClient.post<any>(url, newUser);
  }

  signUser(newUser: Usersignin):Observable<any>{
    const url=this.loginEndPoint;
    this.userresp=this.httpClient.post<any>(url,newUser);
    console.log(this.userresp);
    return this.userresp;
  }

  logout() {
    // remove user from local storage and set current user to null
    console.log(localStorage.getItem('user'));
    localStorage.removeItem('user');
    this.router.navigate(['login-user']);
}

}
