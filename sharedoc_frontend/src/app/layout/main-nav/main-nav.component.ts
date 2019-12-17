import {Component} from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { KeycloakProfile } from 'keycloak-js';
import { KeycloakService} from "keycloak-angular";


@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent {
  userDetails: KeycloakProfile;
 loggedIn:boolean;

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,private keycloakService:KeycloakService) {
  }

  isLoggedIn(){
    if(this.keycloakService.isLoggedIn()){
      return this.loggedIn= true;
    }
  }

  async Logout() {
    await this.keycloakService.logout()

  }
}
