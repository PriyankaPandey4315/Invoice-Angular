import { Component, OnInit } from '@angular/core';
import ApexChart from 'apexcharts'

declare const renderActivity:any;
declare const renderInsurance:any;
declare const renderExpenses:any;
declare const renderSparklines:any;

@Component({
  selector: 'app-patients-dashboard',
  imports: [],
  templateUrl: './patients-dashboard.component.html',
  styleUrl: './patients-dashboard.component.css'
})
export class PatientsDashboardComponent implements OnInit{

  ngOnInit(): void {
      this.renderActivityChart();
      this.renderInsuranceChart();
      this.renderExpensesChart();
      this.renderSparklinesChart();
  }

  renderActivityChart(){
    if(typeof renderActivity === 'function'){
      renderActivity();
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

  renderExpensesChart(){
    if(typeof renderExpenses === 'function'){
      renderExpenses();
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
