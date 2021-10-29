import { Injectable } from '@angular/core';
import {Product} from '../models/model.products'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[]= [];

  constructor() { }

  getShoppingCart(){
    return this.myShoppingCart;
  }

  getMyShoppingCart(product:Product){
    this.myShoppingCart.push(product);
  }
  getTotal(){
    return this.myShoppingCart.reduce((suma,item)=>suma+item.price,0)
  }

}
