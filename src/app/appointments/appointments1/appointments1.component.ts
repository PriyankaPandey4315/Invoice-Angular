import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../core/shared-module/common-module';
import {  RouterModule } from '@angular/router';


@Component({
  selector: 'app-appointments1',
  imports:[SharedModule, RouterModule],
  templateUrl: './appointments1.component.html',
  styleUrls: ['./appointments1.component.css']
})
export class Appointments1Component {

}