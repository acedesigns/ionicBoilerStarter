/* =======================================================
 *
 * Created by anele on 2020/07/30.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';
import { RegisterPage } from './register.page';

@NgModule({
    imports: [
        CommonModule, ReactiveFormsModule,
        FormsModule,
        IonicModule,
        RegisterPageRoutingModule
    ],
    declarations: [RegisterPage]
})

export class RegisterPageModule {}
