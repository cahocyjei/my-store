import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import { User,UserDTO } from '../models/model.user'

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private apiUrl= `${environment.API_URL}/api/users`;

  constructor(private http:HttpClient) { }

  create(dto:UserDTO){
    return this.http.post<User>(this.apiUrl,dto);
  }

  getAll(){
    return this.http.get<User[]>(this.apiUrl);
  }
  getById(id:number){
    return this.http.get<User>(`${this.apiUrl}/id`);
  }
}
