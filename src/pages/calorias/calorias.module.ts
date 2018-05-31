import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaloriasPage } from './calorias';

@NgModule({
  declarations: [
    CaloriasPage,
  ],
  imports: [
    IonicPageModule.forChild(CaloriasPage),
  ],
})
export class CaloriasPageModule {}
