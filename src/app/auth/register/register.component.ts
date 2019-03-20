import { Component, OnInit } from '@angular/core'
import { RegisterModel } from '../model/register.model';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs'

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerModel: RegisterModel

    constructor(private authService: AuthService, private router: Router) {
        this.registerModel = new RegisterModel('','');
    }

    ngOnInit() {
        
    }

    registerFunc() {
        this.authService.register(this.registerModel)
            .subscribe(data => {
                this.router.navigate(['/login'])
            })
    }
}