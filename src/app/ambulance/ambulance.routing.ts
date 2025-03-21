import { RouterModule, Routes } from "@angular/router";
import { AmbulanceComponent } from "./ambulance.component";
import { AmbulanceListComponent } from "./ambulance-list/ambulance-list.component";
import { AddAmbulanceComponent } from "./add-ambulance/add-ambulance.component";
import { EditAmbulanceComponent } from "./edit-ambulance/edit-ambulance.component";
import { AmbulanceCallListComponent } from "./ambulance-call-list/ambulance-call-list.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
    {
        path:  '',
        component: AmbulanceComponent,
        children:[
            {
                path:  'ambulance-list',
                component: AmbulanceListComponent
              },
              {
                path:  'add-ambulance',
                component: AddAmbulanceComponent
              },
            {
                path:  'edit-ambulance',
                component: EditAmbulanceComponent
              },
              {
                path:  'ambulance-call-list',
                component: AmbulanceCallListComponent
              },
        ],
      },
]
 @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class AmbulanceRouting {}
  