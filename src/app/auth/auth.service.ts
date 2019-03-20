import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginModel } from './model/login.mode';
import { RegisterModel } from './model/register.model';
import { Observable } from '../../../node_modules/rxjs';

const appKey = 'kid_HJCY7AMU4';
const appSecret = '37a51e178a55408595babcaa06933516';
const registerUrl = `https://baas.kinvey.com/user/${appKey}`;
const loginUrl = `http://baas.kinvey.com/user/${appKey}/login`;
const logoutUrl = `http://baas.kinvey.com/user/${appKey}/_logout`;

@Injectable()
export class AuthService {

    constructor(private http: HttpClient, router: Router) { }

    login(loginModel: LoginModel): Observable<LoginModel> {
        return this.http.post(loginUrl, JSON.stringify(loginModel),
    {
        headers: this.getHeaders('Basic')
    })
    }

    register(registerModel: RegisterModel) {
        return this.http.post(registerUrl, JSON.stringify(registerModel),
        {
            headers: this.getHeaders('Basic')
        })
    }

    logout() {

    }

    private getHeaders(type: string): HttpHeaders {
        if (type === 'Basic') {
            return new HttpHeaders({
                'Authorization': `Basic ${btoa(`${appKey}:${appSecret}`)}`,
                'Content-Type': 'application/json'
            })
        }
        else {
            return new HttpHeaders({
                'Authorization': `Kinvey ${sessionStorage.getItem('authtoken')}`,
                'Content-Type': 'application/json'
            })
        }
    }
}