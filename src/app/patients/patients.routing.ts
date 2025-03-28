import { RouterModule, Routes } from "@angular/router";
import { PatientsComponent } from "./patients.component";
import { PatientsDashboardComponent } from "./patients-dashboard/patients-dashboard.component";
import { PatientsListComponent } from "./patients-list/patients-list.component";
import { AddPatientsComponent } from "./add-patients/add-patients.component";
import { EditPatientsDetailsComponent } from "./edit-patients-details/edit-patients-details.component";
import { NgModule } from "@angular/core";

const routes : Routes=[
 {
    path:'',
    component: PatientsComponent,
    children:[
        {
            path:'patients-dashboard', 
            component: PatientsDashboardComponent
        },
        {
            path:'patients-list', 
            component: PatientsListComponent
        },
        {
            path:'add-patients', 
            component: AddPatientsComponent
        },
        {
            path:'edit-patients-details', 
            component: EditPatientsDetailsComponent
        },
    ],
  },

]

@NgModule({

    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})
export class PatientsRoutingModule{}