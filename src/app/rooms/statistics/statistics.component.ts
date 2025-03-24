import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

declare const renderStatistics:any;

@Component({
  selector: 'app-statistics',
  imports: [RouterModule],
  templateUrl: './statistics.component.html',
  styleUrl: './statistics.component.css'
})
export class StatisticsComponent implements OnInit{

  ngOnInit(): void {
      this.renderStatisticsChart();
  }

  renderStatisticsChart(){
    if(typeof renderStatistics === 'function'){
      renderStatistics();
    }else{
      console.log('Chart function is not defined.')
    }
  }

}
