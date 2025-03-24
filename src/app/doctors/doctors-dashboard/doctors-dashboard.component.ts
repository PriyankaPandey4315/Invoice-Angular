import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import ApexChart from 'apexcharts'

declare const renderGender:any;
declare const renderPatients:any;
declare const renderSurgeries:any;
declare const renderAppointments:any;
declare const renderIncome:any;


@Component({
  selector: 'app-doctors-dashboard',
  imports: [RouterModule],
  templateUrl: './doctors-dashboard.component.html',
  styleUrl: './doctors-dashboard.component.css'
})
export class DoctorsDashboardComponent implements OnInit{

ngOnInit(): void {
  this.renderIncomeChart();
  this.renderAppointmentsChart();
  this.renderGenderChart();
  this.renderPatientsChart();
  this.renderSurgeriesChart();
}


renderIncomeChart(){
  if(typeof renderIncome === 'function'){
    renderIncome();
  } else{
    console.log('Chart function is not defined.')
  }
}

renderAppointmentsChart(){
  if(typeof renderAppointments === 'function'){
    renderAppointments();
  }else{
    console.log('Chart function is not defined.')
  }
}

renderGenderChart(){
  if(typeof renderGender === 'function'){
    renderGender();
  }else{
    console.log('Chart function is not defined.')
  }
}

renderPatientsChart(){
  if(typeof renderPatients === 'function'){
    renderPatients();
  }else{
    console.log('Chart function is not defined.')
  }
}

renderSurgeriesChart(){
  if(typeof renderSurgeries === 'function'){
    renderSurgeries();
  }else{
    console.log('Chart function is not defined.')
  }
}

}
