/* =======================================================
 *
 * Created by anele on 2020/07/30.
 *
 * @anele_ace
 *
 * =======================================================
 */


import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {

    constructor( private router: Router ) { }

    ngOnInit() {}

    goToDetailsPage() {
        this.router.navigate(['/menu/first/tabs/tab1/details']);
        //this.router;
    }
}
