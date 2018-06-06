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

    var aumentar = 600;
    var disminuir = 500 ;
    
   
      if (gender == "f" && actividad == "a" ){
        let alert = this.alertCtrl.create({
          title: 'Resultado',
            message: '- Para mantener tu peso debes consumir :'+ kcal2 + " calorias"+ "- Para aumentar tu peso debes consumir : "+(kcal2+aumentar) +" calorias "+ "- Para disminuar de peso debes consimir: " + (kcal2-disminuir)+ " calorias "  ,
            buttons: ['OK']
          });
        alert.present();
      }else{
        if(gender == "m" && actividad == "a" ) {
          let alert = this.alertCtrl.create({
            title: 'Resultado ',
              message: '- Para mantener tu peso debes consumir : '+ kcal1 + " calorias"+ "- Para aumentar tu peso debes  consumir : "+(kcal1+aumentar) +" calorias  " + "- Para disminuar de peso debes consimir: " + (kcal1-disminuir)+ " calorias "  ,
            buttons: ['OK']
          });
          alert.present();
        }else{
          if(gender == "f" && actividad == "b"){
            let alert = this.alertCtrl.create({
              title: 'Resultado',
                message: '- Para mantener tu peso debes consumir : '+ kcal4 + " calorias" + "- Para aumentar tu peso debes  consumir : "+(kcal4+aumentar) +" calorias " + "- Para disminuar de peso debes consimir: " + (kcal4-disminuir)+ " calorias "  ,
              buttons: ['OK']
            });
            alert.present();
          }else{
            if(gender == "m" && actividad == "b"){
              let alert = this.alertCtrl.create({
                title: 'Resultado',
                  message: '- Para mantener tu peso debes consumir : '+ kcal3 + " calorias"+ "- Para aumentar tu peso debes  consumir : "+(kcal3+aumentar) +" calorias " + "- Para disminuar de peso debes consimir: " + (kcal3-disminuir)+ " calorias "  ,
                buttons: ['OK']
              });
              alert.present();
            }
            else{
              if(gender == "f" && actividad == "c"){
                let alert = this.alertCtrl.create({
                  title: 'Resultado',
                    message: '- Para mantener tu peso debes consumir : '+ kcal6 + " calorias"+ "- Para aumentar tu peso debes  consumir : "+(kcal6+aumentar) +" calorias " + "- Para disminuar de peso debes consimir: " + (kcal6-disminuir)+ " calorias " ,
                   buttons: ['OK']
                  });
                alert.present();
              }
              else{
                  if(gender == "m" && actividad == "c"){
                    let alert = this.alertCtrl.create({
                      title: 'Resultado',
                        message: '- Para mantener tu peso debes consumir : '+ kcal5 + " calorias" + "- Para aumentar tu peso debes  consumir : "+(kcal5+aumentar) +" calorias " + "- Para disminuar de peso debes consimir: " + (kcal5-disminuir)+ " calorias "  ,
                       buttons: ['OK']
                      });
                    alert.present();
                  }  
                else{
                  if(gender == "f" && actividad == "d"){
                    let alert = this.alertCtrl.create({
                      title: 'Resultado',
                        message: '- Para mantener tu peso debes consumir : '+ kcal8 + " calorias" + "- Para aumentar tu peso debes  consumir : "+(kcal8+aumentar) +" calorias " + "- Para disminuar de peso debes consimir: " + (kcal8-disminuir)+ " calorias "  ,
                       buttons: ['OK']
                      });
                    alert.present();
                  }
                  else{
                    if(gender == "m" && actividad == "d"){
                      let alert = this.alertCtrl.create({
                        title: 'Resultado',
                          message: '- Para mantener tu peso debes consumir : '+ kcal7 + " calorias" + "- Para aumentar tu peso debes  consumir : "+(kcal7+aumentar) +" calorias " + "- Para disminuar de peso debes consimir: " + (kcal7-disminuir)+ " calorias "  ,

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
