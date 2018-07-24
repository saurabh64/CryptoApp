import { HTTP } from '@ionic-native/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the DataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataProvider {
  result: any;

  constructor(public http: HTTP) {
    console.log('Hello DataProvider Provider');
  }

  getCoins(coins:Array<string>){
    let coinlist='';
    coinlist=coins.join();
    return this.http.get("https://min-api.cryptocompare.com/data/pricemulti?fsyms="+coinlist+"&tsyms=USD",{},{}).then(result=>{
      return result;
    })
  }

}
