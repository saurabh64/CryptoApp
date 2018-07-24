import { DataProvider } from './../../providers/data/data';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  objectKeys=Object.keys;
  likedCoins = [];
  result: any;
  coins:Object;
  constructor(public navCtrl: NavController, private data: DataProvider, private storage: Storage) {

  }

  ionViewDidLoad() {


  }

  ionViewWillEnter() {
    this.refreshCoins();
  }

  refreshCoins() {
    this.storage.get('likedCoins').then((val) => {
      if (!val) {
        this.likedCoins.push('BTC', 'ETH', 'LTC');
        this.storage.set('likedCoins', this.likedCoins);

        this.data.getCoins(this.likedCoins).then(data => {
          this.result = data.data;
          console.log(this.result)
        });
      }
      else {
        this.likedCoins = val;
        this.data.getCoins(this.likedCoins).then(data => {
          this.coins = JSON.parse(<string>data.data)
          
          console.log(this.coins)
        });
      }
    })
  }

}
