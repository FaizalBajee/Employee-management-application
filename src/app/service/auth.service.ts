import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() { }
    isLogin(): boolean {
        const Number = localStorage.getItem('Number')
        if (!Number) {
            return false;
        }
        return true;
    }
}