import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { MatSidenavModule  } from '@angular/material/sidenav';
import { MatListModule  } from '@angular/material/list';
import { MatIconModule  } from '@angular/material/icon';
import { MatButtonModule  } from '@angular/material/button';
import { SharedModule } from '../../core/shared-module/common-module';

@Component({
  selector: 'app-sidebar',
  imports:[SharedModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SlidebarComponent {


  SlideBarVisible = false;

  
  showSlideBar() {
   console.log('mouseenter');
    this.SlideBarVisible = true;
  }

  
  hideSlideBar() {
    console.log('mouseleave');
    this.SlideBarVisible = false;
  }
}




