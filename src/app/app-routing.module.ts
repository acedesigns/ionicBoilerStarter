/* =======================================================
 *
 * Created by anele on 2020/07/30.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login', loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
    },
    {
        path: 'register',loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
    },
    {
        path: 'menu', loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
    ],
    exports: [ RouterModule ]
})

export class AppRoutingModule { }
