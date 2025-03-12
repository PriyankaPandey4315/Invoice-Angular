import { Component } from '@angular/core';
import { NzDropDownModule } from 'ng-zorro-antd/dropdown';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { ApexGraphsComponent } from "./apex-graphs/apex-graphs.component";
import { MorrisGraphsComponent } from "./morris-graphs/morris-graphs.component";

@Component({
  selector: 'app-graphs',
  imports: [NzDropDownModule, NzIconModule, ApexGraphsComponent, MorrisGraphsComponent],
  templateUrl: './graphs.component.html',
  styleUrl: './graphs.component.css'
})
export class GraphsComponent {
  onGraphClick(graphType: string) {
    console.log(`Clicked on ${graphType} Graph`);
}
}