import { RouterModule, Routes } from "@angular/router";
import { AppointmentsComponent } from "./appointments.component";
import { Appointments1Component } from "./appointments1/appointments1.component";
import { AppointmentsListComponent } from "./appointments-list/appointments-list.component";
import { BookAppointmentComponent } from "./book-appointment/book-appointment.component";
import { EditAppointmentComponent } from "./edit-appointment/edit-appointment.component";
import { NgModule } from "@angular/core";

const routes : Routes = [
{
    path:  '',
    component: AppointmentsComponent,
    children:[
        {
            path:'appointments1',
            component:Appointments1Component
        },
        {
            path:'appointments-list',
            component:AppointmentsListComponent
        },
        {
            path:'book-appointment',
            component:BookAppointmentComponent
        },
        {
            path:'edit-appointment',
            component:EditAppointmentComponent
        },
    ],
  },
]

  @NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
  })

export class AppointmentsRoutingModule{}