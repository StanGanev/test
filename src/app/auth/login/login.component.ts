import { Component, OnInit } from '@angular/core'
import { LoginModel } from '../model/login.mode';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
loginModel: LoginModel
    
constructor(private authService: AuthService, private router: Router) {
    this.loginModel = new LoginModel('','');
}

    ngOnInit() {
        
    }

    loginFunc(){
        console.log(this.loginModel);
        this.authService
        .login(this.loginModel)
        .subscribe(res => {
            console.log(res);
            this.router.navigate(['/home'])
        }, err => {
            console.log(err);
        });
    }
}