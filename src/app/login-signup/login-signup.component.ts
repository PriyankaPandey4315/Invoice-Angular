import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-login-signup',
  imports: [RouterModule],
  templateUrl: './login-signup.component.html',
  styleUrl: './login-signup.component.css'
})
export class LoginSignupComponent {

  
  constructor() {
    document.body.classList.add('no-scroll'); 
  }

  ngOnDestroy() {
    document.body.classList.remove('no-scroll'); 
  }
}
