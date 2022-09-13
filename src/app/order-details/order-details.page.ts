import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.page.html',
  styleUrls: ['./order-details.page.scss'],
})
export class OrderDetailsPage implements OnInit {

  constructor() { }

  orders:any;

  upcoming: boolean= true;
  past: boolean = false;

  dateValue = new Date(Date.now()).toISOString();
  format = 'dd MM yyyy';
  
   pastOrder: any[] = [];
   upcomingOrder: any[] = [];

  ngOnInit() {
    this.orders = JSON.parse(localStorage.getItem('Ürünler'));
    this.upcomingChanged();
  }

  segmentChanged(event:any){
    
    if(event.detail.value == "upcoming"){
      this.upcoming = true;
      this.past = false;
    }
    else{
      this.upcoming = false;
      this.past = true;
    }
  }

  upcomingChanged()
  {
    const curDate = new Date();

    var reslocal = JSON.parse(localStorage.getItem('Ürünler'));
    if(reslocal != undefined)
    {
      let resDates = JSON.parse(localStorage.getItem('Ürünler'));
      
      for( var i = 0; i < resDates.length; i++)
      {
        if(resDates[i] < curDate)
        {
          this.pastOrder =JSON.parse(localStorage.getItem('Ürünler'));
          this.pastOrder.push(this.orders);
        }
        else{
          this.upcomingOrder =JSON.parse(localStorage.getItem('Ürünler'));
          this.upcomingOrder.push(this.orders);
        }
      }
    }
  }
}
