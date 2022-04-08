import { Injectable } from '@angular/core';
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private router: Router
  ) {

  }
  isLogged() {
    const token = localStorage.getItem('token')
    return !!token
  }

    logout = () => {
    localStorage.removeItem('token')
      this.router.navigateByUrl('/login')
    }

}
