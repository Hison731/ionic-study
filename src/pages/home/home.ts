import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { DataProvider } from '../../provider/data';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  datalist: any = [];

  constructor(
    public dataProvider: DataProvider,
    public navCtrl: NavController
  ) {
    this.dataProvider.getdata().then((response) => {
      let list = JSON.parse(response)
      this.datalist = list;
    }).catch((err) => {

    })
  }

  second(index) {
    this.navCtrl.push("SecondPage", {'list' : this.datalist[index]});
  }
}
