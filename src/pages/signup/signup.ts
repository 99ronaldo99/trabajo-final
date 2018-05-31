import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, ToastController, NavParams } from 'ionic-angular';
import { UsersserviceProvider } from '../../providers/usersservice/usersservice';
import * as firebase from 'firebase';
import { HomePage } from '../home/home';
/*import { Utils } from '../../libs/utils/utils';*/

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
  providers: [UsersserviceProvider],

})
export class SignupPage {

  align = 'start';

  public nombre : any;
  public apellido : any;
  public edad : any;
  public estatura : string;
  public email :   string;
  public password : any;
  public peso : any;
  public masculino : boolean;
  public femenino : boolean;
  public BajaIntensidad : boolean;
  public MedianaIntensidad : boolean;
  public NingunaActividad : boolean;
  public AltaIntensidad : boolean;
  
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams, 
    public usersserviceProvider : UsersserviceProvider, 
    public toastCtrl: ToastController, 
    public loadingCtrl: LoadingController,
   /* public utils: Utils*/
    ) {
          //
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }


  doSignup(){

    var   account = {
      nombre: this.nombre,
      apellido: this.apellido || '',
      edad: this.edad || '',
      estatura: this.estatura || '',
      email: this.email,
      password: this.password,
      peso: this.peso || '',
      masculino : this.masculino || '',
      femenino : this.femenino || '',
      BajaIntensidad : this.BajaIntensidad || '',
      MedianaIntensidad : this.MedianaIntensidad || '',
      NingunaActividad : this.NingunaActividad || '',
      AltaIntensidad : this.AltaIntensidad || '',

    };
 
var that = this;

var loader = this.loadingCtrl.create({
      content: "Cargando",
      
    });
    loader.present();


    this.usersserviceProvider.signupUserService(account).then(authData => {
      //successful
      loader.dismiss();
      that.navCtrl.setRoot(HomePage);

    }, error => {
loader.dismiss();
     // Unable to log in
      let toast = this.toastCtrl.create({
        message: 'Correo electronico invalido',
        duration: 5000,
        position: 'top'
      });
      toast.present();

      that.password = ""//empty the password field

    });

    
  }

}
