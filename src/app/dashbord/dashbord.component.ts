import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashbord',
  templateUrl: './dashbord.component.html',
  styleUrls: ['./dashbord.component.css']
})
export class DashbordComponent {

  user:any;
  constructor(private router:Router,private http:HttpClient , )
  {

  }
ngOnInit(){

}
  username:string="";
  password:string="";
 
  login()
  {
    if(this.username=="a" && this.password=="a" )
    {
      
      this.router.navigateByUrl('add');
      
    }
    else
    {
      window.alert("Please Enter Valid Information");
    }

  }
}
