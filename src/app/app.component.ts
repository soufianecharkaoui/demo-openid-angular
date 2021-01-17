import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
 
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
    constructor(public oidcSecurityService: OidcSecurityService, private router: Router) {}
 
    ngOnInit() {
        this.oidcSecurityService
            .checkAuth()
            .subscribe((isAuthenticated) => {
                if (!isAuthenticated) {
                  this.router.navigate(['/']);
                } else {
                  this.oidcSecurityService.userData$.subscribe(user => user ? console.log(user.name + " is logged in") : null);
                }
            });
    }
}