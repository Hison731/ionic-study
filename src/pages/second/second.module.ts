import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SecondPage } from './second';

@NgModule({
  declarations: [
    SecondPage,
  ],
  imports: [
    IonicPageModule.forChild(SecondPage),
  ],
})
export class SecondPageModule {}
