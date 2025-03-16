import { Component } from '@angular/core';
import { SharedModule } from './core/shared-module/common-module';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { MenuItems } from './core/model/menu-items';
import { routes } from './app.routes';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], // ✅ Use "styleUrls" for array
  imports: [
    RouterOutlet,
    SharedModule,
    RouterModule // ✅ Use RouterModule directly
  ],
  standalone: true, // ✅ Mark as standalone
})
export class AppComponent {

  isOpen= true;

  menuItems=MenuItems

  constructor(private router:Router){}

 
  toggleDrawer(drawer: any) {
    drawer.toggle();
  }

  onMenuItemClick(item: any) {
    console.log('Clicked:', item);
    this.router.navigate([item.path])
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
