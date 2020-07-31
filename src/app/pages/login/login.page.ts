/* =======================================================
 *
 * Created by anele on 2020/07/30.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss']
})

export class LoginPage implements OnInit {

    constructor( private router: Router ) { }

    ngOnInit() {}

    goRegister() {
        this.router.navigate(['/register']);
    }

    goLogIn() {
        this.router.navigate(['/login']);
    }

}
