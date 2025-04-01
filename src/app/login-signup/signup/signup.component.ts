import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-signup',
  imports: [RouterModule,RouterLink],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {

  constructor() {
    document.body.classList.add('no-scroll'); 
  }

  ngOnDestroy() {
    document.body.classList.remove('no-scroll'); 
  }
}
