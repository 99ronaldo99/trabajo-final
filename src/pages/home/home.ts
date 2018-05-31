import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';


import { LoginPage } from '../login/login';
import { NutricionPage } from '../nutricion/nutricion';
import { RutinasPage } from '../rutinas/rutinas';
import { EjerciciosPage } from '../ejercicios/ejercicios';
import { RecomendacionesPage } from '../recomendaciones/recomendaciones';
import { ConfiguracionesPage } from '../configuraciones/configuraciones';


import { App, MenuController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Platform, ActionSheetController } from 'ionic-angular';



declare let cordova:any;

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  

  constructor(
  	public navCtrl: NavController,
  	public actionsheetCtrl: ActionSheetController,app: App, menu: MenuController,
  	public alerCtrl: AlertController,
  	public platform: Platform,
    ) {

  }

 

openMenu() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Nuestras Redes',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'YouTube',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-youtube' : null,
          handler: () => {
            console.log('Delete clicked');
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://www.youtube.com/","_blank")
            }else{
              window.open("https://www.youtube.com/","_blank")
            }
          }
        },
        {
          text: 'Facebook',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-facebook' : null,
          handler: () => {
            console.log('Share clicked');
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://www.facebook.com/","_blank")
            }else{
              window.open("https://www.facebook.com/","_blank")
            }
          }
        },
        {
          text: 'Twitter',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-twitter' : null,
          handler: () => {
            console.log('Play clicked');
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://twitter.com/?lang=en/","_blank")
            }else{
              window.open("https://twitter.com/?lang=en","_blank")
            }
          }
        },
        {
          text: 'Google +',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'logo-googleplus' : null,
          handler: () => {
            console.log('Favorite clicked');
            if (this.platform.is('cordova')){
              cordova.InAppBrowser.open("https://plus.google.com/u/1/113385853126641825821/","_blank")
            }else{
              window.open("https://plus.google.com/u/1/113385853126641825821","_blank")
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  doLogout(){ 
    this.navCtrl.setRoot(LoginPage)
    
  }

  openEjercicios(){ 
    this.navCtrl.push(EjerciciosPage)
  }

  openRutinas(){ 
    this.navCtrl.push(RutinasPage)
  }

  openRecomendaciones(){ 
    this.navCtrl.push(RecomendacionesPage)
  }

  openNutricion(){ 
    this.navCtrl.push(NutricionPage)
  }
  openConfiguraciones(){
    this.navCtrl.push(ConfiguracionesPage)
  }

}
