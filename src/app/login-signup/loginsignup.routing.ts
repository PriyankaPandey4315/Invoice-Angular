import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginSignupComponent } from "./login-signup.component";
import { LoginComponent } from "./login/login.component";
import { SignupComponent } from "./signup/signup.component";
import { ForgotPasswordComponent } from "./forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";

const routes: Routes=[
    {
        path:  '',
        component: LoginSignupComponent,
        children:[
            {
                path:  'login',
                component: LoginComponent
              },
              {
                path:  'signup',
                component: SignupComponent
              },
            {
                path:  'forgot-password',
                component: ForgotPasswordComponent
              },
              {
                path:  'reset-password',
                component: ResetPasswordComponent
              },
        ],
      },
]
@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class LoginSignupRoutingModule{}