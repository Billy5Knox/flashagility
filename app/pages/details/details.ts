import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  templateUrl: 'build/pages/details/details.html',
})
export class DetailsPage {

  constructor(private nav: NavController, private navParams: NavParams) {
    this.navParams.get('item');
  }

}
