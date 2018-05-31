import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepeticionesPage } from './repeticiones';

@NgModule({
  declarations: [
    RepeticionesPage,
  ],
  imports: [
    IonicPageModule.forChild(RepeticionesPage),
  ],
})
export class RepeticionesPageModule {}
