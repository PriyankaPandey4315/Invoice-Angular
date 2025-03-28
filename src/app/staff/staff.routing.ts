import { RouterModule, Routes } from "@angular/router";
import { StaffComponent } from "./staff.component";
import { StaffListComponent } from "./staff-list/staff-list.component";
import { AddStaffComponent } from "./add-staff/add-staff.component";
import { EditStaffDetailComponent } from "./edit-staff-detail/edit-staff-detail.component";
import { NgModule } from "@angular/core";

const routes: Routes=[
    {
        path:  '',
        component: StaffComponent,
        children:[
            {
                path:'staff-list',
                component:StaffListComponent
            },
            {
                path:'add-staff',
                component:AddStaffComponent
            },
            {
                path:'edit-staff-detail',
                component:EditStaffDetailComponent
            },
        ],
      },
]

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class StaffRoutingModule{}