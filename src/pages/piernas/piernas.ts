import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController,} from 'ionic-angular';
import  {InformacionPage}from '../informacion/informacion'

/**
 * Generated class for the PiernasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-piernas',
  templateUrl: 'piernas.html',
})
export class PiernasPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  		public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PiernasPage');
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(InformacionPage, characterNum);
    modal.present();
  }


}
