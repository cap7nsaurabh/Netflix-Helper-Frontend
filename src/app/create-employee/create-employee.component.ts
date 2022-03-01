import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
//import { EmpService } from '../emp.service';
//import { Employee } from '../employee';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit 
{
  user: User = new User();

  showMsg: boolean = false;

  showMsguae: boolean =false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit()
  {
    console.log(this.user);
    this.userService.registerUser(this.user).subscribe(data => 
      {
        console.log(data);
        this.router.navigate(['/login-user']);

      },
      error => {console.log(error);
                this.showMsg = true;});
  }
  redirect(){
    this.router.navigate(['/login-user']);
  }
}
