import { Injectable } from '@angular/core';
import { AlertController, } from 'ionic-angular';
import { HTTP } from '@ionic-native/http';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  loader: any;

  constructor(
    public http: HTTP,
    public alertCtrl: AlertController
  ) {
    console.log("Data provider loaded.");
  }

  getdata(): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.get('http://www.makumaku.de/hashtag/second.json', {}, {})
        .then(data => {
          resolve(data.data);
        })
        .catch(error => {
          console.log(error);
        });
    })
  }

  SuccessMessage(message: string) {
    this.alertCtrl.create({
      title: 'Success',
      message: message,
      enableBackdropDismiss: false,
      buttons: ['Ok']
    }).present();
  }
}
