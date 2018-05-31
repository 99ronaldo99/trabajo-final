import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { BicepsPage } from '../biceps/biceps';
import { TricepsPage } from '../triceps/triceps';
import { HombrosPage } from '../hombros/hombros';
import { PiernasPage } from '../piernas/piernas';
import { AbdomenPage } from '../abdomen/abdomen';
import { EspaldaPage } from '../espalda/espalda';
import { GluteosPage } from '../gluteos/gluteos';
import { PectoralesPage } from '../pectorales/pectorales';
import { ModalController, } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-ejercicios',
  templateUrl: 'ejercicios.html',
})
export class EjerciciosPage {
   pet: string = "puppies";

   isAndroid: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public modalCtrl: ModalController) {
    /*this.isAndroid = platform.is('android');*/
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EjerciciosPage');
  }

  openTabs(){
    this.navCtrl.setRoot(HomePage)
  }

   openBiceps(){
    this.navCtrl.push(BicepsPage)
  }

  openTriceps(){
    this.navCtrl.push(TricepsPage)
  }

  openPectorales(){
    this.navCtrl.push(PectoralesPage)
  }

  openHombros(){
    this.navCtrl.push(HombrosPage)
  }

  openAbdomen(){
    this.navCtrl.push(AbdomenPage)
  }

  openPiernas(){
    this.navCtrl.push(PiernasPage)
  }

  openGluteos(){
    this.navCtrl.push(GluteosPage)
  }

  openEspalda(){
    this.navCtrl.push(EspaldaPage)
  }

}

