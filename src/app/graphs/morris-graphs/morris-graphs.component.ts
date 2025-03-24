import { Component, OnInit } from '@angular/core';

declare const renderArea:any;
declare const renderBarColors:any;
declare const renderData:any;

@Component({
  selector: 'app-morris-graphs',
  imports: [],
  templateUrl: './morris-graphs.component.html',
  styleUrl: './morris-graphs.component.css'
})
export class MorrisGraphsComponent implements OnInit{

ngOnInit(): void {
    this.renderAreaChart();
    this.renderBarColorsChart();
    this.renderDataChart();
}

renderAreaChart(){
  if(typeof renderArea === 'function'){
    renderArea();
  }else{
    console.log('Chart function is not defined.')
  }
}

renderBarColorsChart(){
  if(typeof renderBarColors === 'function'){
    renderBarColors();
  }else{
    console.log('Chart function is not defined.')
  }
}

renderDataChart(){
  if(typeof renderData === 'function'){
    renderData();
  }else{
    console.log('Chart function is not defined.')
  }
}

}
