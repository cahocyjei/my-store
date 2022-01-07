import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {UsersService} from './services/users.service'
import {UserDTO} from './models/model.user'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = '';
token = '';

usuarios:UserDTO[]=[];

constructor(private userService:UsersService,private authService:AuthService){}

onLoad(img:string){
  console.log("log Padre",img)
}
showMenu= true;


toggleButton(){
  this.showMenu= !this.showMenu;
}
//
createUser(){
  const userDto: UserDTO={
    email:'usuario2@gmail.com',
    password:'1098',
    name:'usuario2'
  }
  this.userService.create(userDto)
  .subscribe(data=>{
    this.usuarios.unshift(data);
    console.log(data);
})
}
//
getAllUsers(){
  this.userService.getAll()
  .subscribe(rta=>console.log(rta));
}

}
