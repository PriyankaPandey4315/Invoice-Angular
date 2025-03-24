import { Component, OnInit } from '@angular/core';

declare const renderUsa:any;


@Component({
  selector: 'app-vactor-maps',
  imports: [],
  templateUrl: './vactor-maps.component.html',
  styleUrl: './vactor-maps.component.css'
})
export class VactorMapsComponent implements OnInit {

ngOnInit(): void {
  
    this.renderUsaMap();
}

renderUsaMap(){
  if(typeof renderUsa === 'function'){
    renderUsa();
  }else{
    console.log('Chart function is not defined.')
  }}

}
