import { Component, OnInit } from '@angular/core';

declare const renderArea:any;
declare const renderBar:any;
declare const renderStick:any;
declare const renderColumn:any;
declare const renderDonut:any;
declare const renderFunnel:any;
declare const renderGuage:any;
declare const renderMap:any;
declare const renderLine:any;
declare const renderPie:any;
declare const renderPyramid:any;
declare const renderRadial:any;



@Component({
  selector: 'app-apex-graphs',
  imports: [],
  templateUrl: './apex-graphs.component.html',
  styleUrl: './apex-graphs.component.css'
})
export class ApexGraphsComponent implements OnInit {

ngOnInit(): void {
this.renderAreaChart();
this.renderBarChart();
this.renderStickChart();
this.renderColumnChart();
this.renderDonutChart();
this.renderFunnelChart();
this.renderGuageChart();
this.renderMapChart();
this.renderLineChart();
this.renderPieChart();
this.renderPyramidChart();
this.renderRadialChart();
}

renderAreaChart(){
  if(typeof renderArea === 'function'){
    renderArea();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderBarChart(){
  if(typeof renderBar === 'function'){
    renderBar();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderStickChart(){
  if(typeof renderStick === 'function'){
    renderStick();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderColumnChart(){
  if(typeof renderColumn === 'function'){
    renderColumn();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderDonutChart(){
  if(typeof renderDonut === 'function'){
    renderDonut();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderFunnelChart(){
  if(typeof renderFunnel === 'function'){
    renderFunnel();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderGuageChart(){
  if(typeof renderGuage === 'function'){
    renderGuage();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderMapChart(){
  if(typeof renderMap === 'function'){
    renderMap();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderLineChart(){
  if(typeof renderLine === 'function'){
    renderLine();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderPieChart(){
  if(typeof renderPie === 'function'){
    renderPie();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderPyramidChart(){
  if(typeof renderPyramid === 'function'){
    renderPyramid();
  }else{
    console.log('Chart function is not defined.')
  }
}
renderRadialChart(){
  if(typeof renderRadial === 'function'){
    renderRadial();
  }else{
    console.log('Chart function is not defined.')
  }
}

}
