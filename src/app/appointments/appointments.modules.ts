import { NgModule } from "@angular/core";
import { AppointmentsRoutingModule } from "./appointments.routing";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[
       AppointmentsRoutingModule,
       CommonModule
    ]
})
export class AppointmentsModule{}