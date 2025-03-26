import { Component, OnInit } from '@angular/core';
import ApexChart from 'apexcharts'

declare const renderExpenses:any;


@Component({
  selector: 'app-expenses',
  imports: [],
  templateUrl: './expenses.component.html',
  styleUrl: './expenses.component.css'
})
export class ExpensesComponent implements OnInit{

  ngOnInit(): void {
      this.renderExpensesChart();
  }

  renderExpensesChart(){
    if(typeof renderExpenses === 'function'){
      renderExpenses();
    }else{
      console.log('Chart function is not defined.')
    }
  }

}
