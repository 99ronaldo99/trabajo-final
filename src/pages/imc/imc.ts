import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-imc',
  templateUrl: 'imc.html',
})
export class ImcPage {

  user = {
    peso:'',
    altura:''
  }


  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ImcPage');
  }
  openTabs(){
    this.navCtrl.setRoot(HomePage)
  }

  tryCalcular(){

    var resultado1 = (parseFloat(this.user.altura) * parseFloat(this.user.altura) ) ;
    var resultado = parseInt(this.user.peso) / resultado1; 
    
      if (  resultado <=   10 ){
        let alert = this.alertCtrl.create({
        title: 'Estas Desnutrido',
        message: 'Su resultado es: '+resultado,
        buttons: ['OK']
        });
        alert.present(); 
         
      }// alert("desnutrido" + resultado )
    else  {
              if( resultado >=  10 && resultado <= 19 ){
                let alert = this.alertCtrl.create({
                title: 'Estas bajo de peso',
                message: 'Su resultado es: '+resultado,
                buttons: ['OK']
                });
                alert.present();
                }
      else {
              if (resultado >= 19 && resultado <= 25 ){
                let alert = this.alertCtrl.create({
                title: 'Estas en peso normal',
                message: 'Su resultado es: '+resultado,
                buttons: ['OK']
                });
                alert.present();
                }
        else{
              if (resultado >= 25 && resultado <= 30 ){
                let alert = this.alertCtrl.create({
                title: 'Obesidad tipo 1',
                message: 'Su resultado es: '+resultado,
                buttons: ['OK']
                });
                alert.present();
                }
          else{
              if (resultado >= 30 && resultado <= 35 ){
                let alert = this.alertCtrl.create({
                title: 'Obesidad tipo 2',
                message: 'Su resultado es: '+resultado,
                buttons: ['OK']
                });
                alert.present();
                }
            else{
              if (resultado >= 35 && resultado <= 40 ){
                let alert = this.alertCtrl.create({
                title: 'Obecidad tipo 3',
                message: 'Su resultado es: '+resultado,
                buttons: ['OK']
                });
                alert.present();
                }
            }
          }
        }
      }
    }      
  }
}

