import { Component, OnInit } from '@angular/core';
import ApexChart from 'apexcharts'


declare const renderActivity:any;
declare const renderIncome:any;
declare const renderOrder:any;

@Component({
  selector: 'app-medical-dashboard',
  imports: [],
  templateUrl: './medical-dashboard.component.html',
  styleUrl: './medical-dashboard.component.css'
})
export class MedicalDashboardComponent implements OnInit {

ngOnInit() {
    this.renderActivityChart();
    this.renderIncomeChart();
    this.renderOrderChart();

}

renderActivityChart(){
  if(typeof  renderActivity === 'function' ){
    renderActivity();
  }else{
    console.log('Chart function is not defined.')
  }
}

renderIncomeChart(){
  if(typeof renderIncome === 'function'){
    renderIncome();
  }else{
    console.log('Chart function is not defined.')
  }
}

renderOrderChart(){
  if(typeof renderOrder === 'function'){
    renderOrder();
  }else{
    console.log('Chart function is not defined.')
  }
}

}
