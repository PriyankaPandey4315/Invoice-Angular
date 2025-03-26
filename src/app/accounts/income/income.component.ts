import { Component, OnInit } from '@angular/core';
import ApexChart from 'apexcharts'

declare const renderIncome:any;

@Component({
  selector: 'app-income',
  imports: [],
  templateUrl: './income.component.html',
  styleUrl: './income.component.css'
})
export class IncomeComponent implements OnInit {
  ngOnInit(): void {
    this.renderIncomeChart();
  }

  renderIncomeChart(){
    if(typeof renderIncome === 'function'){
      renderIncome();
    }else{
      console.log('Chart function is not defined.')
    }
  }

}
