import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { environment } from 'src/environments/environment';
import {Auth} from '../models/model.auth';
import {User} from '../models/model.user'
import { tap } from 'rxjs/operators';
import { TokenService } from './token.service';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl= `${environment.API_URL}/api/auth`;

  constructor(private htt:HttpClient,private tokenService:TokenService) { }

  /*loginAndProfile(email:string,password:string){
    return this.login(email,password)
    .pipe(switchMap(token=>this.profile(token.acces_token)))
   }*/


  login(email:string, password: string){
    return this.htt.post<Auth>(`${this.apiUrl}/login`,{email,password})
    .pipe(
      tap(response=>this.tokenService.saveToken(response.acces_token))
    );
  }

  profile(){
    return this.htt.get<User>(`${this.apiUrl}/profile`,{})
  }
}
