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
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { DetailsPageRoutingModule } from './details-routing.module';
import { DetailsPage } from './details.page';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DetailsPageRoutingModule
    ],

    declarations: [DetailsPage]
})
export class DetailsPageModule {}
