import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

export class User
{
  Title:string='';
  FirstName:string='';
  LastName:string='';
  Age:number=0;
  Email:string='';
  Country:string='';
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private userList: User[] =[
    { 
      Title:"Mr", 
      FirstName:"Gururaj",  
      LastName:"Jewargi", 
      Age:35, 
      Email:"gururaj@gmail.com",
      Country: "India"    
    },  
    {  
      Title:"Mr", 
      FirstName:"Sathick",  
      LastName:"Basha", 
      Age:30, 
      Email:"gururaj@gmail.com",
      Country: "US"
    },  
    {  
      Title:"Mr", 
      FirstName:"Vinoth",  
      LastName:"Kumar", 
      Age:40, 
      Email:"vinoth@gmail.com",
      Country: "US"
    },
    { 
      Title:"Mr", 
      FirstName:"Raj",  
      LastName:"Kumar", 
      Age:40, 
      Email:"raj@gmail.com",
      Country: "India"    
    },  
    {  
      Title:"Mr", 
      FirstName:"Senthil",  
      LastName:"Kumar", 
      Age:30, 
      Email:"Senthil@gmail.com",
      Country: "US"
    },  
    {  
      Title:"Mr", 
      FirstName:"Pandi",  
      LastName:"Raj", 
      Age:40, 
      Email:"pandi@gmail.com",
      Country: "UK"
    }
  ]
  constructor(private httpClient:HttpClient) { }
  getUsers():Observable<User[]>
  { 
    return of(this.userList);
  }
}
