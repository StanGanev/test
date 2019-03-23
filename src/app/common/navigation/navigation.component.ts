import { Component, OnInit, OnChanges, AfterViewChecked, AfterViewInit } from '@angular/core'
import { AuthService } from 'src/app/auth/auth.service';

@Component({
    selector: 'app-navigation',
    templateUrl: './navigation.component.html',
    styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnChanges, AfterViewInit {
    username: string;
    isAuth: boolean;

    constructor(private autService: AuthService) {}

    ngOnInit() {
        this.username = this.autService.getUsername();
        this.isAuth = this.autService.isLoggedIn();
    }
    ngOnChanges() {
        this.username = this.autService.getUsername();
        this.isAuth = this.autService.isLoggedIn();
    }

    ngAfterViewInit() {
        this.username = this.autService.getUsername();
        this.isAuth = this.autService.isLoggedIn();
    }
    logoutFunc() {
        this.autService.logout();
    }
}