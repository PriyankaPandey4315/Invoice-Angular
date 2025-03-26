import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditDoctorComponent } from "./edit-doctor/edit-doctor.component";
import { AddDoctorComponent } from "./add-doctor/add-doctor.component";
import { DoctorsProfileComponent } from "./doctors-profile/doctors-profile.component";
import { DoctorsCardsComponent } from "./doctors-cards/doctors-cards.component";
import { DoctorsComponent } from "./doctors.component";
import { DoctorsListComponent } from "./doctors-list/doctors-list.component";
import { DoctorsDashboardComponent } from "./doctors-dashboard/doctors-dashboard.component";

const routes: Routes = [
    {
      path: '',
      component: DoctorsComponent,
      children: [
        { path: 'doctors-dashboard', component: DoctorsDashboardComponent },
        { path: 'doctors-list', component: DoctorsListComponent },
        { path: 'doctors-cards', component: DoctorsCardsComponent },
        { path: 'doctors-profile', component: DoctorsProfileComponent },
        { path: 'add-doctor', component: AddDoctorComponent },
        { path: 'edit-doctor', component: EditDoctorComponent }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DoctorsRoutingModule {}
  