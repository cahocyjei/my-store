import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';
import {UsersService} from './services/users.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = '';
token = '';

constructor(private userService:UsersService,private authService:AuthService){}

onLoad(img:string){
  console.log("log Padre",img)
}
showMenu= true;


toggleButton(){
  this.showMenu= !this.showMenu;
}

createUser(){
  this.userService.create({name:'Usuario',email:'usuario@gmail.com',password:'4321'
})
.subscribe(rta=>{
  console.log(rta);
})
}

loginUser(){
  this.authService.login('usuario@gmail.com','4321')
  .subscribe(rta=>{
    this.token= rta.acces_token;
    console.log(rta);
  })
}
profileUser(){
this.authService.profile(this.token)
.subscribe(profile=>{
  console.log(profile);
})
}
}
