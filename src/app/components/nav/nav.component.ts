import { Component, OnInit } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { StoreService } from 'src/app/services/store.service';
import {User} from '../../models/model.user'
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  active_menu= false;
  counter= 0;
  profile: User | null= null;


  constructor(private storeService: StoreService,private authService:AuthService) {

   }

  ngOnInit(): void {
    this.storeService.myCart$.subscribe(products=>this.counter=products.length);
  }

  toggled_button(){
    this.active_menu= !this.active_menu;
  }

  loginUser(){
    this.authService.login('john@mail.com','changeme')
    .subscribe(rta=>{
      this.profileUser();
     })
     //
    }
    //
   profileUser(){
   this.authService.profile()
   .subscribe(user=>{
     this.profile= user;
   })
   }

}
