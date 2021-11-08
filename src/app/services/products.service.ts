import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product,createProductDTO} from '../models/model.products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //End point API
  private apiUrl= "https://young-sands-07814.herokuapp.com/api/products"

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProductById(id:number){
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  create(dto:createProductDTO){
    return this.http.post<Product>(this.apiUrl,dto);
  }

}
