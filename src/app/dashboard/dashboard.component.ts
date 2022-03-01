import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { Fav } from '../fav';
import { ApiflixService } from '../apiflix.service';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  movies:any
  searchquery:String;
  containers=[];
  userdet:any;
  //dash value is true when we are not showing search result;
  dash:Boolean;
   //sear value is true when we are showing search results;
  sear:Boolean;
  //sear0 value is true when we have 0 results;
  searempty:Boolean;
  
  searchres:any;
  fav:Fav =new Fav();
  constructor(private httpClient: HttpClient,  private router: Router,private userservie:UserService) {
    this.searchquery="";
    this.dash=true;
    this.sear=false;
    this.searempty=false;
   }
  ngOnInit(): void {
    if(localStorage.getItem('user')===null){
      this.router.navigate(['/login-user']);
    }
    const headerdic={
      'x-rapidapi-key': '664c4f31camshfc6f2cebf39f9c4p1886a4jsnd6fc4de20605',
      'x-rapidapi-host': 'unogs-unogs-v1.p.rapidapi.com'
    }
    const headers=new HttpHeaders(headerdic);
    headers.append('x-rapidapi-key','664c4f31camshfc6f2cebf39f9c4p1886a4jsnd6fc4de20605');
    headers.append('x-rapidapi-host','unogs-unogs-v1.p.rapidapi.com');
    console.log(headers);
    let url="https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get:exp:US";
    let resp=this.httpClient.get(url,{headers:headers});
    resp.subscribe((data)=>{this.movies=data;
    console.log(this.movies);});
    this.userdet=JSON.parse(localStorage.getItem('user')||"{}");
    
  }
  //logout
  redirect(){
    this.userservie.logout();
    this.router.navigate(['/login-user']); 
  }
  //adding to favourites
  addtofav(id:String){
    //console.log(this.user);
    this.userdet=JSON.parse(localStorage.getItem('user')||"{}");
    console.log(this.userdet.userid);
    const movie=this.movies.ITEMS.filter(function(it:any){
      return it.netflixid===id;
    })[0];
    this.fav=new Fav();
    console.log(movie);
    this.fav.id=movie.netflixid;
    this.fav.image=movie.image;
    this.fav.title=movie.title;
    this.fav.description=movie.synopsis;
    this.fav.type="movies";
    console.log(this.fav);
    let url1='http://localhost:8080/fav/';
    let us=this.userdet.userid;
    let url=url1.concat(us);
    let resp=this.httpClient.post(url,this.fav);
    resp.subscribe((data)=>{
      console.log("success");
      console.log(data);
      alert("Added to Favourites!");
    },
    error => {alert("Already in Favourites")});
  }
  //search
  search(){
    this.dash=false;
    this.sear=true;
    console.log(this.searchquery);
    if(this.searchquery===''){
      this.sear=false;
      this.dash=true;
    }
    else{
      const query=this.searchquery.toLowerCase();
      this.searchres=this.movies.ITEMS.filter(function(it:any){
        return it.title.toLowerCase().includes(query)});
        if(this.searchres.length===0){
          this.searempty=true;
          console.log(this.searempty);
        }
        console.log(this.searchres);
    }
    
  }

  addtowl(id:String){
    this.userdet=JSON.parse(localStorage.getItem('user')||"{}");
    console.log(this.userdet.userid);
    const movie=this.movies.ITEMS.filter(function(it:any){
      return it.netflixid===id;
    })[0];
    this.fav=new Fav();
    console.log(movie);
    this.fav.id=movie.netflixid;
    this.fav.image=movie.image;
    this.fav.title=movie.title;
    this.fav.description=movie.synopsis;
    this.fav.type="movies";
    console.log(this.fav);
    let url1='http://localhost:8080/watchLater/';
    let us=this.userdet.userid;
    let url=url1.concat(us);
    console.log(url)
    let resp=this.httpClient.post(url,this.fav);
    resp.subscribe((data)=>{
      console.log("success");
      console.log(data);
      alert("Added to Watch Later!");
    },
    error => {alert("Already in Watch Later")});
  }
}
