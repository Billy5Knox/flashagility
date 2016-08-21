import { Component } from '@angular/core';
import { NavController, AlertController, NavParams } from 'ionic-angular';
import { DetailsPage } from '../details/details';
/*
import { ResultdetailPage } from 'build/pages/resultdetail/resultdetail';
*/
/*
  Generated class for the ResultsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/

@Component({
  templateUrl: 'build/pages/results/results.html',
})

export class ResultsPage {

  selectedItem: any;
  i
  items = [
    {show: 'GACT001', date: '03/12/2015', agility: '2', atime: '41.11sec', aclear: 'N', jumping: '1', jtime: '38.11sec', jclear: 'Y'},
    {show: 'GACT002', date: '21/12/2015', agility: '4', atime: '39.21sec', aclear: 'N', jumping: '3', jtime: '37.35sec', jclear: 'N'},
    {show: 'GART001', date: '05/01/2016', agility: '3', atime: '37.40sec', aclear: 'Y', jumping: '1', jtime: '38.11sec', jclear: 'Y'},
    {show: 'GACT004', date: '19/01/2016', agility: '2', atime: '41.22sec', aclear: 'N', jumping: '2', jtime: '41.11sec', jclear: 'N'},
    {show: 'GACT005', date: '29/01/2016', agility: '1', atime: '41.55sec', aclear: 'Y', jumping: '1', jtime: '40.34sec', jclear: 'N'},
    {show: 'GACT006', date: '02/02/2016', agility: '2', atime: '36.12sec', aclear: 'N', jumping: '2', jtime: '37.21sec', jclear: 'Y'},
    {show: 'GACT007', date: '13/02/2016', agility: '1', atime: '37.44sec', aclear: 'Y', jumping: '3', jtime: '40.45sec', jclear: 'N'},
    {show: 'GART002', date: '23/02/2016', agility: '4', atime: '40.23sec', aclear: 'N', jumping: '1', jtime: '38.35sec', jclear: 'N'},
    {show: 'GACT010', date: '06/03/2016', agility: '2', atime: '39.43sec', aclear: 'Y', jumping: '1', jtime: '39.22sec', jclear: 'Y'},
    {show: 'GACT011', date: '16/03/2016', agility: '3', atime: '36.23sec', aclear: 'N', jumping: '2', jtime: '39.31sec', jclear: 'Y'},
    {show: 'GACT012', date: '26/03/2016', agility: '1', atime: '37.56sec', aclear: 'N', jumping: '2', jtime: '38.11sec', jclear: 'N'},
    {show: 'GACT013', date: '03/04/2016', agility: '1', atime: '40.43sec', aclear: 'Y', jumping: '2', jtime: '41.43sec', jclear: 'N'},
    {show: 'GART003', date: '13/04/2016', agility: '3', atime: '41.33sec', aclear: 'N', jumping: '1', jtime: '40.52sec', clear: 'Y'},
    {show: 'GACT014', date: '23/04/2016', agility: '2', atime: '41.42sec', aclear: 'N', jumping: '3', jtime: '40.23sec', jclear: 'N'},
    {show: 'GACT015', date: '04/05/2016', agility: '2', atime: '38.57sec', aclear: 'N', jumping: '1', jtime: '39.11sec', jclear: 'Y'},
    {show: 'GACT016', date: '14/05/2016', agility: '3', atime: '39.53sec', aclear: 'N', jumping: '2', jtime: '41.15sec', jclear: 'N'},
    {show: 'GACT017', date: '24/05/2016', agility: '1', atime: '40.59sec', aclear: 'Y', jumping: '2', jtime: '38.35sec', jclear: 'N'},
    {show: 'GART004', date: '05/06/2016', agility: '2', atime: '39.51sec', aclear: 'N', jumping: '1', jtime: '39.45sec', jclear: 'Y'},
    {show: 'GACT018', date: '15/06/2016', agility: '3', atime: '41.33sec', aclear: 'N', jumping: '3', jtime: '37.24sec', jclear: 'N'},
    {show: 'GACT019', date: '25/06/2016', agility: '2', atime: '40.15sec', aclear: 'N', jumping: '3', jtime: '41.56sec', jclear: 'N'},
    {show: 'GACT020', date: '06/07/2016', agility: '1', atime: '38.24sec', aclear: 'Y', jumping: '1', jtime: '40.11sec', jclear: 'Y'},
  ]
/*
  static get parameters() {
    return [[NavController], [NavParams]];
  }
*/
  constructor(public navCtrl: NavController, navParams: NavParams, private alertCtrl: AlertController) {
    this.selectedItem = navParams.get('item');
/*
    this.nav = nav;
    this.selectedItem = navParams.get('item');
*/    
  }

/*
  openModal(characterNum) {
    let modal = this.modalCtrl.create(ModalsContentPage, characterNum);
    modal.present();
  }
*/
  itemClicked(event, item) {
    this.navCtrl.push(DetailsPage, {
      item: item
    });
  }
/*
  itemClicked(event, item) {
    this.nav.push(ResultdetailPage, {
      item: item
    });
  }
*/  
  addItem(item) {
    let prompt = this.alertCtrl.create({
      title: 'Add Show',
      inputs: [{
        name: 'show'

      }],
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Add',
          handler: data => {
            this.items.push(data);
          }
        }
      ]
    });

    prompt.present();
  }

  editItem(item) {
    let prompt = this.alertCtrl.create({
      title: 'Edit Show',
      inputs: [{
        name: 'show'
      }],
      buttons: [
        {
          text: 'Edit'
        },
        {
          text: 'Save',
          handler: data => {
            let index = this.items.indexOf(item);
            if (index > -1){
              this.items[index] = data;
            }
          }
        }
      ]
    });

    prompt.present();
  }

  removeItem(item) {
    for (this.i = 0; this.i < this.items.length; this.i++) {
      if (this.items[this.i] == item) {
        this.items.splice(this.i, 1);
      }
    }
  }
}

/*
@Component({
  templateUrl: 'build/pages/resultdetail/resultsdetail.html'
})

class ModalsContentPage {
  character;

  constructor(
      public platform: Platform,
      public params: NavParams,
      public viewCtrl: ViewController
  ) {
    var characters = [
      {
        name: 'Gollum',
        quote: 'Sneaky little hobbitses!',
        image: 'img/avatar-gollum.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'River Folk' },
          { title: 'Alter Ego', note: 'Smeagol' }
        ]
      },
      {
        name: 'Frodo',
        quote: 'Go back, Sam! I\'m going to Mordor alone!',
        image: 'img/avatar-frodo.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Weapon', note: 'Sting' }
        ]
      },
      {
        name: 'Samwise Gamgee',
        quote: 'What we need is a few good taters.',
        image: 'img/avatar-samwise.jpg',
        items: [
          { title: 'Race', note: 'Hobbit' },
          { title: 'Culture', note: 'Shire Folk' },
          { title: 'Nickname', note: 'Sam' }
        ]
      }
    ];
    this.character = characters[this.params.get('charNum')];
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
}
*/