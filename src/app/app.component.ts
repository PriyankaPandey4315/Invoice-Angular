import { Component, OnInit } from '@angular/core';
import { SharedModule } from './core/shared-module/common-module';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MenuItems } from './core/model/menu-items';
import { ChangeDetectorRef } from '@angular/core';
import { FooterComponent } from "./shared/footer/footer.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [SharedModule, RouterOutlet, RouterModule, FooterComponent],
  standalone: true, // ✅ Mark as standalone
})
export class AppComponent implements OnInit{


  isOpen= true;

  menuItems=MenuItems;

  constructor(private router:Router){}
  ngOnInit(): void {
  }

 
  toggleDrawer(drawer: any) {
    drawer.toggle();
  }
  onMenuItemClick(item: any) {
    if (item.children) {
      this.toggleDropdown(item);
    } else {
      this.router.navigate([item.path]);
    }
  }

  toggleDropdown(item: any) {
    // Close other dropdowns
    this.menuItems.forEach(menu => {
      if (menu !== item) menu.isOpen = false;
    });

    // Toggle the clicked item
    item.isOpen = !item.isOpen;
  }

  // onMenuItemClick(item: any) {
  //   console.log('Before toggle:', item.isOpen);
  //   if (item.children?.length) {
  //     item.isOpen = !item.isOpen;
  //     console.log('After toggle:', item.isOpen);
  //   } else {
  //     this.router.navigate([item.path]);
  //   }
  // }
  

 


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

