import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "../service/auth.service";
@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private route: Router, private authService: AuthService) { }
    canActivate(): boolean {
        if (!this.authService.isLogin()) {
            this.route.navigate(['/login-screen']);
            return false;
        }
        return true;
    }

}