import { Component, OnInit } from '@angular/core';

declare const renderPayments:any;

@Component({
  selector: 'app-payment',
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css'
})
export class PaymentComponent implements OnInit{

ngOnInit(): void {
    this.renderPaymentsChart();
}

renderPaymentsChart(){
  if(typeof renderPayments === 'function'){
    renderPayments();
  }else{
    console.log('Chart function is not defined.')
  }
}

}
