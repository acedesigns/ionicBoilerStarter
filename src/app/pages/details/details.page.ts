/* =======================================================
 *
 * Created by anele on 2020/07/30.
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

    constructor( private activatedRoute: ActivatedRoute ) { }

    ngOnInit() {}

}
