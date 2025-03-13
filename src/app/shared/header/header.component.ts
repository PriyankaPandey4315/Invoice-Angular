import { NgIf } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  opened?: true;
  toggleDrawer(event: any) {
    event.toggle();
  }

 


  flagsVisible = false;

  
  showFlags() {
   console.log('mouseenter');
    this.flagsVisible = true;
  }

  
  hideFlags() {
    console.log('mouseleave');
    this.flagsVisible = false;
  }

}
