import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SalariesComponent } from "./salaries.component";
import { SalaryListComponent } from "./salary-list/salary-list.component";
import { PayslipComponent } from "./payslip/payslip.component";


const routes: Routes = [
    {
       path:  '',
       component: SalariesComponent,
       children:[
           {
               path:  'salary-list',
               component: SalaryListComponent
             },
             {
               path:  'payslip',
               component: PayslipComponent
             },
       ],
     },
]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class SalariesRouting {}
  