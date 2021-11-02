import { Injectable } from '@angular/core';
import {Product} from '../models/model.products'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private myShoppingCart: Product[]= [];
  myCart= new BehaviorSubject<Product[]>([]);

  myCart$= this.myCart.asObservable();

  constructor() { }

  getMyShoppingCart(){
    return this.myShoppingCart;
  }

  addProductShoppingCart(product:Product){
    this.myShoppingCart.push(product);
    this.myCart.next(this.myShoppingCart);
  }
  getTotal(){
    return this.myShoppingCart.reduce((suma,item)=>suma+item.price,0)
  }

}
