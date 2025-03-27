import { Component, OnInit } from '@angular/core';
import 'raphael/raphael.min.js';
import 'morris.js/morris.min.js';

declare var Morris: any;
declare var Raphael: any;

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
  if (typeof Morris !== 'undefined') {
    console.log('Morris.js is loaded ✅');
    this.renderAreaChart();
  } else {
    console.error('Morris.js is not loaded ❌');
  }
    // this.renderBarColorsChart();
    // this.renderDataChart();
}

renderAreaChart(){
  if(typeof Morris!== 'undefined'){
 
    new Morris.Area({
  element: "areaChart",
  data: [
    { y: "2017", a: 10, b: 5, c: 2 },
    { y: "2018", a: 40, b: 15, c: 8 },
    { y: "2019", a: 15, b: 50, c: 25 },
    { y: "2020", a: 40, b: 15, c: 7 },
    { y: "2021", a: 20, b: 30, c: 20 },
    { y: "2022", a: 35, b: 15, c: 20 },
    { y: "2023", a: 20, b: 15, c: 51 },
  ],
  xkey: "y",
  ykeys: ["a", "b", "c"],
  behaveLikeLine: !0,
  pointSize: 0,
  labels: ["Sales", "Expenses", "Projects"],
  pointStrokeColors: [
    "#207a5a",
    "#248a65",
    "#116aef",
    "#3ea37e",
    "#53ad8d",
    "#69b89b",
    "#7ec2a9",
    "#94ccb8",
    "#a9d6c6",
  ],
  gridLineColor: "#dfd6ff",
  lineColors: [
    "#207a5a",
    "#248a65",
    "#116aef",
    "#3ea37e",
    "#53ad8d",
    "#69b89b",
    "#7ec2a9",
    "#94ccb8",
    "#a9d6c6",
  ],
  gridtextSize: 10,
  fillOpacity: 0.4,
  lineWidth: 0,
  hideHover: "auto",
  resize: true,
  redraw: true,
});
}else {
  console.log('Morris.js is not loaded.');
}

// renderBarColorsChart(){
//   if(typeof renderBarColors === 'function'){
//     renderBarColors();
//   }else{
//     console.log('Chart function is not defined.')
//   }
// }

// renderDataChart(){
//   if(typeof renderData === 'function'){
//     renderData();
//   }else{
//     console.log('Chart function is not defined.')
//   }
// }

}
}