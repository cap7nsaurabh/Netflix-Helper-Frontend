import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fav } from '../fav';
import { UserService } from '../user.service';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent implements OnInit {

  favlist:any;
  userdet:any;
  fav:Fav=new Fav();
  constructor(private httpClient: HttpClient,  private router: Router,private userservie:UserService) { }

  ngOnInit(): void {
    if(localStorage.getItem('user')===null){
      this.router.navigate(['/login-user']);
    }
    this.userdet=JSON.parse(localStorage.getItem('user')||"{}");
    let url1='http://localhost:8080/fav/';
    let us=this.userdet.userid;
    let url=url1.concat(us);
    let resp=this.httpClient.get(url);
    resp.subscribe((data)=>{this.favlist=data;
    console.log(data);});
  }
  
  redirect(){
    this.userservie.logout();
    this.router.navigate(['/login-user']); 
  }
  view(id:String){
    this.fav=new Fav();
    this.fav=this.favlist.filter(function(it:any){
      return it.id===id;
    })[0];
    console.log(this.fav);
    let url1='http://localhost:8080/fav/';
    let us=this.userdet.userid;
    let showid=this.fav.id;
    let url=(url1.concat(us)).concat("/"+showid);
    console.log(url);
    let resp=this.httpClient.delete(url);
    resp.subscribe((data)=>{
      console.log("success");
      console.log(data);
      alert("Removed from favourites!");
      this.ngOnInit();
    },
    error => {alert("some error occured")});
    
  }

}
