import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ModalController,} from 'ionic-angular';
import  {InformacionPage}from '../informacion/informacion'
 



@IonicPage()
@Component({
  selector: 'page-pectorales',
  templateUrl: 'pectorales.html',
})
export class PectoralesPage {
	

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
    public params: NavParams,
    public modalCtrl: ModalController,
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PectoralesPage');
  }



  openModal(characterNum) {

    let modal = this.modalCtrl.create(InformacionPage, characterNum);
    modal.present();
  }

}