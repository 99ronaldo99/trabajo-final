import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
/*import { TamizajePage } from '../pages/tamizaje/tamizaje';*/
/*import { ConfiguracionesPage } from '../pages/configuraciones/configuraciones';*/
import { AcercaPage } from '../pages/acerca/acerca';
import { ImcPage } from '../pages/imc/imc';
import { CaloriasPage } from '../pages/calorias/calorias';
import { RepeticionesPage } from '../pages/repeticiones/repeticiones';
import { CronometroPage } from '../pages/cronometro/cronometro';


import * as firebase from 'firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = LoginPage;
  /*rootPage: any= this.isLogged() ? HomePage : LoginPage*/

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(
    public platform: Platform, 
    public statusBar: StatusBar, 
    public splashScreen: SplashScreen) {
    
    

    this.initializeApp();

  var that = this;

    firebase.auth().onAuthStateChanged(function(user) {
      if (user) {
        // User is signed in .
        that.rootPage = HomePage;

        // ...
      } else {
        // User is signed out.
        // ...
        that.rootPage = LoginPage;

      }
    });



    // used for an example of ngFor and navigation
    this.pages = [
      { title: ' Cronometro', component: CronometroPage,icon: 'time' },
      /*{ title: ' Tamizaje', component: TamizajePage, icon: 'body' },*/
      { title: ' Calcular IMC', component: ImcPage, icon: 'happy' },
      { title: ' Calorias necesarias', component: CaloriasPage, icon: 'nutrition' },
      { title: ' Repeticion maxima', component: RepeticionesPage, icon: 'pulse' },
      /*{ title: ' Configuracion', component: ConfiguracionesPage, icon: 'settings' },*/
      { title: ' Acerca de', component: AcercaPage, icon: 'information-circle' },
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }
}