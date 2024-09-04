import { Injectable } from "@angular/core";
@Injectable({
    providedIn: 'root'
})
export class AuthService {
    constructor() { }
    isLogin(): boolean {
        const storedNumber = localStorage.getItem('Number')
        return !!storedNumber;
    }
}