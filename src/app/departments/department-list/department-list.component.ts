import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import ApexChart from 'apexcharts'

declare const renderList:any;
declare const renderEmployee:any;

@Component({
  selector: 'app-department-list',
  imports: [RouterModule],
  templateUrl: './department-list.component.html',
  styleUrl: './department-list.component.css'
})
export class DepartmentListComponent implements OnInit{
  ngOnInit(): void {
    this.renderListChart();
    this.renderEmployeeChart();
    }

    renderListChart(){
      if(typeof renderList === 'function'){
        renderList();
      }else{
        console.log('Chart function is not defined.')
      }
    }
  
    renderEmployeeChart(){
      if(typeof renderEmployee === 'function'){
        renderEmployee();
      }else{
        console.log('Chart function is not defined.')
      }
    }

}
