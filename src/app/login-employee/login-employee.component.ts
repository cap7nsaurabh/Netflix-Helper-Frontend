import { Component, OnInit } from '@angular/core';
import { Usersignin } from '../usersignin';
import {UserService} from '../user.service';
import { Router } from '@angular/router';
import { ApiflixService } from '../apiflix.service';
@Component({
  selector: 'app-login-employee',
  templateUrl: './login-employee.component.html',
  styleUrls: ['./login-employee.component.css']
})
export class LoginEmployeeComponent implements OnInit {

  user:Usersignin=new Usersignin();
  resp:any;
  showMsg: boolean = false;

  constructor(private userService: UserService, private router: Router,public apiflix:ApiflixService) { }

  ngOnInit(): void {
  }

  onSubmit1()
  {
    console.log(this.user);
    this.userService.signUser(this.user).subscribe(data => 
      {
        console.log(data);
       // this.userService.userresp=data;
       localStorage.setItem('user',JSON.stringify(data));
        this.router.navigate(['/user-dashboard']);
        this.apiflix.userresp=this.resp;
      },
      error => {console.log(error);
                this.showMsg = true;
              });
    
  }
  redirect()
  {
      this.router.navigate(['/create-user']);
  }

}
