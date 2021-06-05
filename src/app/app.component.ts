import { Component, OnInit } from '@angular/core';
import {UsersService} from './users.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userList:any[]=[];
  title = 'Usecase7-HttpClient';
constructor(private userService: UsersService){}
ngOnInit(){
  this.userService.getUsers().subscribe((ret:any[])=>{
    this.userList = ret;
  })
}

}
