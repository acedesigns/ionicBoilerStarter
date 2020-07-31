/* =======================================================
 *
 * Created by anele on 2020/07/30.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstWithTabsPage } from './first-with-tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: FirstWithTabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule )
            },
            {
                path: 'tab2',
                loadChildren: () => import('../tab2/tab2.module').then( m => m.Tab2PageModule )
            },
            {
                path: 'tab1/details',
                loadChildren: () => import('../details/details.module').then( m => m.DetailsPageModule )
            }
        ]
    },
    {
        path : '',
        redirectTo:'tabs/tab1',
        pathMatch:'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class FirstWithTabsPageRoutingModule {}
