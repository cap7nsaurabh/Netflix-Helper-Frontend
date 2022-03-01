import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';
import { Watchl } from '../watchl';

@Component({
  selector: 'app-watchlater',
  templateUrl: './watchlater.component.html',
  styleUrls: ['./watchlater.component.css']
})
export class WatchlaterComponent implements OnInit {
  watchllist:any;
  userdet:any;
  watchl:Watchl=new Watchl();

  constructor(private httpClient: HttpClient,  private router: Router,private userservie:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')===null){
      this.router.navigate(['/login-user']);
    }
    this.userdet=JSON.parse(localStorage.getItem('user')||"{}");
    let url1='http://localhost:8080/watchLater/';
    let us=this.userdet.userid;
    let url=url1.concat(us);
    let resp=this.httpClient.get(url);
    resp.subscribe((data)=>{this.watchllist=data;
    console.log(data);});
  }
  redirect(){
    this.userservie.logout();
    this.router.navigate(['/login-user']); 
  }
  view(id:String){
    this.watchl=new Watchl();
    this.watchl=this.watchllist.filter(function(it:any){
      return it.id===id;
    })[0];
    console.log(this.watchl);
    let url1='http://localhost:8080/watchLater/';
    let us=this.userdet.userid;
    let showid=this.watchl.id;
    let url=(url1.concat(us)).concat("/"+showid);
    console.log(url);
    let resp=this.httpClient.delete(url);
    resp.subscribe((data)=>{
      console.log("success");
      console.log(data);
      alert("Removed from watch later!");
      this.ngOnInit();
    },
    error => {alert("some error occured")});
  }
}
