import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {Auth} from '../models/model.auth';
import {User} from '../models/model.user'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl= `${environment.API_URL}/api/auth`;

  constructor(private htt:HttpClient) { }

  login(email:string, password: string){
    return this.htt.post<Auth>(`${this.apiUrl}/login`,{email,password})
  }

  profile(token:string){
    //const headers= new HttpHeaders();
    //headers.set('Authorization',`Bearer ${token}`)
    return this.htt.get<User>(`${this.apiUrl}/profile`,{headers:{Authorization:`Bearer ${token}`}})

  }
}
