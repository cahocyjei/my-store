import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product} from '../models/model.products'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private apiUrl= "https://young-sands-07814.herokuapp.com/api/products"

  constructor(private http:HttpClient) { }

  getAllProducts(){
    return this.http.get<Product[]>(this.apiUrl);
  }
  getProduct(id:number){
    return this.http.get<Product>(`${this.apiUrl}/${id}`)
  }
}
