import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from '../../../node_modules/rxjs';
import { AuthService } from '../auth/auth.service';
import { PetModel } from './models/pet.model';

const baseUrl: string = 'https://baas.kinvey.com/appdata/';
const appKey = 'kid_HJCY7AMU4';

@Injectable({ providedIn: 'root' })


export class PetsService {

    constructor(private http: HttpClient, private authService: AuthService) {

    }

    createPet(body: PetModel) {
        return this.http.post(`${baseUrl}${appKey}/pets`,
            JSON.stringify(body), {
                headers: this.authService.getHeaders('Kinvey')
            })
    }
}