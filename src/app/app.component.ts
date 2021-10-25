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

myProducts:Product[]=[
  {
    id: "1",
    name: "Buzzo",
    price:450,
    img:"https://i.imgur.com/vw90UjG.png"
  },
  {
    id: "2",
    name: "Swetter",
    price:560,
    img:"https://i.imgur.com/bsnPZE0.png"
  },
  {
    id: "3",
    name: "Taza",
    price:1500,
    img:"https://i.imgur.com/PHuXSY8.png"
  }
]

toggleButton(){
  this.showMenu= !this.showMenu;
}
}
