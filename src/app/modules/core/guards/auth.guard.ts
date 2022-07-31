import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(
    private router: Router,
    private auth: AuthenticationService
    ){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // let isLoggedIn = this.auth.isLoggedIn();
    // if (!isLoggedIn){
    //   this.router.navigate(['/auth/login'])
    // }
    // return isLoggedIn;

    return this.auth.isLoggedIn()
      .then(data => {
        if(data){
          return Promise.resolve(true);
        } else {
          this.router.navigate(['/auth/login'])
          return Promise.resolve(false);
        }
      })
      .catch(()=>{
        this.router.navigate(['/auth/login'])
        return Promise.resolve(false);
      });
  }

}
