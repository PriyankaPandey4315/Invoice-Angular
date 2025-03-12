import { Component } from '@angular/core';

@Component({
  selector: 'app-slidebar',
  imports:[],
  templateUrl: './slidebar.component.html',
  styleUrl: './slidebar.component.css'
})
export class SlidebarComponent {

  
  flagsVisible = false;

  
  showSlideBar() {
   console.log('mouseenter');
    this.flagsVisible = true;
  }

  
  hideSlideBar() {
    console.log('mouseleave');
    this.flagsVisible = false;
  }
}




