import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

  product = {
    firma: '',
    date: '',
    name: '',
    quantity: '',
    amount: '',
  }
  
  dateValue = new Date(Date.now()).toISOString();

  products: any[] = [];
  currProducts: any[] = [];

  addProduct(){
    console.log(this.product);

    const resTime = new Date(this.product.date);
    const curDate = new Date();

    if(resTime < curDate){
      console.log("eski tarih");
      return false;
    }

    var resLocal = JSON.parse(localStorage.getItem('Ürünler'));
    if(resLocal != undefined){
      console.log(this.currProducts);
      this.currProducts = JSON.parse(localStorage.getItem('Ürünler'));
      this.currProducts.push(this.product);
      localStorage.setItem('Ürünler', JSON.stringify(this.currProducts));
    }
    else{
      this.products.push(this.product);
      localStorage.setItem('Ürünler', JSON.stringify(this.products));
    }
  }
}

