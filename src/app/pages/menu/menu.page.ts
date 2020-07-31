/* =======================================================
 *
 * Created by anele on 2020/07/30.
 *
 * @anele_ace
 *
 * =======================================================
 */


import {Router, RouterEvent} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-menu',
    templateUrl: './menu.page.html',
    styleUrls: ['./menu.page.scss'],
})

export class MenuPage implements OnInit {

    pages = [
        {
            title : 'First Page',
            url : '/menu/first'
        },
        {
            title : 'Second Page',
            url : '/menu/second'
        }
    ];

    selectedPath: string ='';

    constructor( private router: Router ) {
        this.router.events.subscribe(
            (event: RouterEvent) => {
                if (event && event.url) {
                   this.selectedPath = event.url;
                }
            }
        );
    }

    ngOnInit() {}

}
