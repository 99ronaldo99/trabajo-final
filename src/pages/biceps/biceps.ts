import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ModalController, Platform, ViewController } from 'ionic-angular';
import  {InformacionPage}from '../informacion/informacion'

/**
 * Generated class for the BicepsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-biceps',
  templateUrl: 'biceps.html',
})
export class BicepsPage {

  constructor(
  	public navCtrl: NavController, 
  	public navParams: NavParams,
  	public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController,
    public modalCtrl: ModalController,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BicepsPage');
  }
  openModal(characterNum) {

    let modal = this.modalCtrl.create(InformacionPage, characterNum);
    modal.present();
  }

}
