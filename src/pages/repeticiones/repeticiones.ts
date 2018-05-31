import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';



/**
 * Generated class for the RepeticionesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-repeticiones',
  templateUrl: 'repeticiones.html',
})
export class RepeticionesPage {

  user = {
    peso : '',
    repeticiones : ''
  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepeticionesPage');
  }

  openTabs(){
    this.navCtrl.setRoot(HomePage)
  }

  tryRepe(){
    var rm = ( 0.0333 * parseInt(this.user.peso) * parseInt(this.user.repeticiones) + 100 );
    let alert = this.alertCtrl.create({
          title: 'Resultado',
            message: 'Su resultado es '+ rm,
            buttons: ['OK']
          });
        alert.present();
  }

}
