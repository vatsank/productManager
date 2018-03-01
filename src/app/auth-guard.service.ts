import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
           boolean  {

            if(this.service.getIsValidUser()) {
              return true;
            } else  {
              this.router.navigate(['/login']);
              return false;
            }


  }
  constructor(private service:AuthenticationService,private router: Router) {

   }

}
