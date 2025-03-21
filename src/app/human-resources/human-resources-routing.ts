import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HumanResourcesComponent } from "./human-resources.component";
import { HrApprovalsComponent } from './hr-approvals/hr-approvals.component';
import { AttendanceComponent } from './attendance/attendance.component';
import { StaffLeavesComponent } from './staff-leaves/staff-leaves.component';
import { HolidaysComponent } from './holidays/holidays.component';


const routes: Routes = [
    {
      path: '',
      component: HumanResourcesComponent,
      children:[
            {
                path:  'hr-approvals',
                component: HrApprovalsComponent
              },
            {
                path:  'attendance',
                component: AttendanceComponent
              },
            {
                path:  'staff-leaves',
                component: StaffLeavesComponent
              },
            {
                path:  'holidays',
                component: HolidaysComponent
              },
        ]
    }
]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class HumanResourcesRouting {}
  