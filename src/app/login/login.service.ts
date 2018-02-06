import { Injectable } from '@angular/core';
import { User } from './user';
import { Router } from '@angular/router';

@Injectable()
export class LoginService {

  constructor(private router : Router) { }

  toLogin(user:User){
    if( user.name ==='user@email.com' 
      && user.password === '12345'){
        this.router.navigate(['/stater']);
      }
    else{
      this.router.navigate(['/login']);
    }
  }

}
