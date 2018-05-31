import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AlertController } from 'ionic-angular';
/**
 * Generated class for the CaloriasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-calorias',
  templateUrl: 'calorias.html',
})
export class CaloriasPage {
  
  aling  = 'start';

  kcal = {
    peso : '',
    altura : '',
    edad : '',
    gender : '',
    actividad : ''

  }

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CaloriasPage');
  }
  openTabs(){
    this.navCtrl.setRoot(HomePage)
  }

  tryKcal(){
    var tmbhombre = (10 * parseInt(this.kcal.peso) + (6.25 * parseInt(this.kcal.altura)) - (5 * parseInt(this.kcal.edad))+ 5);
    var tmbmujer = (10 * parseInt(this.kcal.peso) + (6.25 * parseInt(this.kcal.altura)) - (5 * parseInt(this.kcal.edad)) - 160);
    
    var kcal1 = tmbhombre * 1.12 
    var kcal2 = tmbmujer * 1.12

    var kcal3 = tmbhombre * 1.375
    var kcal4 = tmbmujer * 1.375

    var kcal5 = tmbhombre * 1.55
    var kcal6 = tmbmujer * 1.55

    var kcal7 = tmbhombre * 1.725
    var kcal8 = tmbmujer * 1.725
   
    var actividad : string =  this.kcal.actividad ;
    var gender : string =  this.kcal.gender ;
    
   
      if (gender == "f" && actividad == "a" ){
        let alert = this.alertCtrl.create({
          title: 'Resultado',
            message: 'Su resultado es '+ kcal2,
            buttons: ['OK']
          });
        alert.present();
      }else{
        if(gender == "m" && actividad == "a" ) {
          let alert = this.alertCtrl.create({
            title: 'Resultado',
              message: 'Su resultado es '+ kcal1,
            buttons: ['OK']
          });
          alert.present();
        }else{
          if(gender == "f" && actividad == "b"){
            let alert = this.alertCtrl.create({
              title: 'Resultado',
                message: 'Su resultado es '+ kcal4,
              buttons: ['OK']
            });
            alert.present();
          }else{
            if(gender == "m" && actividad == "b"){
              let alert = this.alertCtrl.create({
                title: 'Resultado',
                  message: 'Su resultado es '+ kcal3,
                buttons: ['OK']
              });
              alert.present();
            }
            else{
              if(gender == "f" && actividad == "c"){
                let alert = this.alertCtrl.create({
                  title: 'Resultado',
                    message: 'Su resultado es '+ kcal6,
                   buttons: ['OK']
                  });
                alert.present();
              }
              else{
                  if(gender == "m" && actividad == "c"){
                    let alert = this.alertCtrl.create({
                      title: 'Resultado',
                        message: 'Su resultado es '+ kcal5,
                       buttons: ['OK']
                      });
                    alert.present();
                  }  
                else{
                  if(gender == "f" && actividad == "d"){
                    let alert = this.alertCtrl.create({
                      title: 'Resultado',
                        message: 'Su resultado es '+ kcal8,
                       buttons: ['OK']
                      });
                    alert.present();
                  }
                  else{
                    if(gender == "m" && actividad == "d"){
                      let alert = this.alertCtrl.create({
                        title: 'Resultado',
                          message: 'Su resultado es '+ kcal7,
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
  }
}
