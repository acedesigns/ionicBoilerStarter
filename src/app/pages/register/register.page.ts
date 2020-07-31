/* =======================================================
 *
 * Created by anele on 2020/07/30.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

    registerForm  : FormGroup;

    constructor( private fb: FormBuilder ) {

        this.registerForm = this.fb.group({
            full_name   : new FormControl('', Validators.required),
        });

    }

    ngOnInit() {}


    signupAction( form : any ) {
        console.log( form.value );
    }

}
