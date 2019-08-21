import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
/**
 * Generated class for the SecondPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-second',
  templateUrl: 'second.html',
})
export class SecondPage {

  subdata: any = [];
  sublist: any = [];
  subtitle: any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private iab: InAppBrowser) {
    if (this.navParams.get('list')) {
      this.subdata = this.navParams.get('list');
      this.subtitle = this.subdata.title;
      this.sublist = this.subdata.data;
      console.log(this.subdata);
    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SecondPage');
  }

  thirdpage(url) {
    const browser = this.iab.create(url);
  }

}
