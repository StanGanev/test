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
username: string;
authToken: string;

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
            this.username = res['username'];
            this.authToken = res['_kmd']['authtoken'];
            sessionStorage.setItem('username', this.username);
            sessionStorage.setItem('authtoken', this.authToken);
            this.router.navigate(['/home'])
        }, err => {
            console.log(err);
        });
    }
}