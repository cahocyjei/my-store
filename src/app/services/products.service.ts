import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {Product,createProductDTO,UpdateProductDTO} from '../models/model.products'
import {retry,map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  //End point API
  private apiUrl= `${environment.API_URL}/api/products`;

  constructor(private http:HttpClient){

  }
  getProductById(id:number){
    return this.http.get<Product>(`${this.apiUrl}/${id}`);
  }
  getProductByPage(limit:number,offset:number){
    return this.http.get<Product[]>(`${this.apiUrl}`,{params:{limit,offset}})
    .pipe(retry(3),
     map(productos=>productos.map(item=>{
      return{
        ...item, taxes: .19 * item.price
      }
     }))
    );
  }
  create(dto:createProductDTO){
    return this.http.post<Product>(this.apiUrl,dto);
  }
  update(id:number, dto:UpdateProductDTO){
    return this.http.put<Product>(`${this.apiUrl}/${id}`,dto);
  }
  delete(id:number){
    return this.http.delete<boolean>(`${this.apiUrl}/${id}`)
  }

}
