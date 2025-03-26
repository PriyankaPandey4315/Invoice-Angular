import { Component, OnInit } from '@angular/core';
import ApexChart from 'apexcharts'

declare const renderHealth:any;
declare const renderInsurance:any;
declare const renderExpense:any;
declare const renderSparklines:any;

@Component({
  selector: 'app-patients-dashboard',
  imports: [],
  templateUrl: './patients-dashboard.component.html',
  styleUrl: './patients-dashboard.component.css'
})
export class PatientsDashboardComponent implements OnInit{

  ngOnInit(): void {
      this.renderHealthChart();
      this.renderInsuranceChart();
      this.renderExpenseChart();
      this.renderSparklinesChart();
  }

  renderHealthChart(){
    if(typeof renderHealth === 'function'){
      renderHealth();
    }else{
      console.log('Chart function is not defined.')
    }
  }

  renderInsuranceChart(){
    if(typeof renderInsurance === 'function'){
      renderInsurance();
    }else{
      console.log('Chart function is not defined.')
    }
  }

  renderExpenseChart(){
    if(typeof renderExpense === 'function'){
      renderExpense();
    }else{
      console.log('Chart function is not defined.')
    }
  }

  renderSparklinesChart(){
    if(typeof renderSparklines === 'function'){
      renderSparklines();
    }else{
      console.log('Chart function is not defined.')
    }
  }

}
