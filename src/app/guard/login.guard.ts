import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { getStorage } from '../common/utills';

@Injectable({
  providedIn: 'root',
})
export class LoginGuard implements CanActivate {
  constructor(public router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const isLogin = getStorage('isLoggedIn');
    if (isLogin === 'false') {
      return true;
    }
    this.router.navigate(['/userDetails']);
    return false;
  }
}
