import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import  {InformacionPage}from '../informacion/informacion';
import { ModalController} from 'ionic-angular';

/**
 * Generated class for the TricepsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-triceps',
  templateUrl: 'triceps.html',
})
export class TricepsPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TricepsPage');
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(InformacionPage, characterNum);
    modal.present();
  }

}