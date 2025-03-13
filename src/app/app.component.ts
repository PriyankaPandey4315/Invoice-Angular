import { Component } from '@angular/core';
import { HeaderComponent } from "./shared/header/header.component";
import { FooterComponent } from "./shared/footer/footer.component";
import { SlidebarComponent } from "./shared/sidebar/sidebar.component";
//import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    FooterComponent,
    SlidebarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Invovice-Angular';
}
