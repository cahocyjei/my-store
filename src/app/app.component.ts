import { Component } from '@angular/core';
import { Product } from './models/model.products';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
title = '';

onLoad(img:string){
  console.log("log Padre",img)
}
showMenu= true;


toggleButton(){
  this.showMenu= !this.showMenu;
}
}
