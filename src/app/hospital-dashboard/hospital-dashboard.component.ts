import { Component, OnInit } from '@angular/core';
import ApexChart from 'apexcharts'

declare const renderAvailableBedsChart: any;// Declare globally
declare const renderTreatment: any;
declare const renderPatients: any;
declare const renderClaims: any;
declare const renderEarnings: any;
declare const renderAge: any;



@Component({
  selector: 'app-hospital-dashboard',
  templateUrl: './hospital-dashboard.component.html',
  styleUrl: './hospital-dashboard.component.css'
})
export class HospitalDashboardComponent implements OnInit {
  ngOnInit(): void {
    this.renderAvailableChart();
    this.renderTreatmentChart();
    this.renderPatientsChart();
    this.renderClaimsChart();
    this.renderAgeChart();
    this.renderEarningsChart();
  }

  renderAvailableChart() {
    if (typeof renderAvailableBedsChart === 'function') {
      renderAvailableBedsChart(); // Call the function from available-beds.js
    } else {
      console.error('Chart function is not defined.');
    }
  }

  renderTreatmentChart(){
    if(typeof renderTreatment === 'function'){
      renderTreatment();
    }else{
      console.error('Chart function is not defined.')
    }
  }

  renderPatientsChart(){
  if(typeof renderPatients === 'function'){
    renderPatients();
  }else{
    console.error('Chart function is not defined.')
  }
}

renderClaimsChart(){
  if(typeof renderClaims === 'function'){
    renderClaims();
  }else{
    console.error('Chart function is not defined.')
  }
}

renderEarningsChart(){
  if(typeof renderEarnings === 'function'){
    renderEarnings();
  }else{
    console.error('Chart function is not defined.')
  }
}

renderAgeChart(){
  if(typeof renderAge === 'function'){
    renderAge();
  }else{
    console.error('Chart function is not defined.')
  }
}

}


