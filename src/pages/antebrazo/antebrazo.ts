import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController} from 'ionic-angular';
import  {InformacionPage}from '../informacion/informacion'


/**
 * Generated class for the AntebrazoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-antebrazo',
  templateUrl: 'antebrazo.html',
})
export class AntebrazoPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AntebrazoPage');
  }

  openModal(characterNum) {

    let modal = this.modalCtrl.create(InformacionPage, characterNum);
    modal.present();
  }

}
