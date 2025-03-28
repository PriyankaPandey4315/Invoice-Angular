import { CommonModule } from "@angular/common";
import { PatientsRoutingModule } from "./patients.routing";
import { NgModule } from "@angular/core";

@NgModule({
    imports:[
        PatientsRoutingModule,
        CommonModule
    ]
})
export class PatientsModule{}