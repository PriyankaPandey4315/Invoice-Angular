import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import ApexChart from 'apexcharts'

declare const renderIncome:any;
declare const renderAppointments:any;
declare const renderClaims:any;
declare const renderEarnings:any;
declare const renderGender:any;
declare const renderPatients:any;
declare const renderSurgeries:any;

@Component({
  selector: 'app-dentist-dashboard',
  imports: [RouterModule],
  templateUrl: './dentist-dashboard.component.html',
  styleUrl: './dentist-dashboard.component.css'
})
export class DentistDashboardComponent implements OnInit {

  ngOnInit(): void {
      this.renderIncomeChart();
      this.renderAppointmentsChart();
      this.renderClaimsChart();
      this.renderEarningsChart();
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

  renderClaimsChart(){
    if(typeof renderClaims === 'function'){
      renderClaims();
    }else{
      console.log('Chart function is not defined.')
    }
  }

  renderEarningsChart(){
    if(typeof renderEarnings === 'function'){
      renderEarnings();
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
