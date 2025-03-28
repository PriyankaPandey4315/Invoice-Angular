import { NgModule } from "@angular/core";
import { DepartmantsRoutingModule } from "./departments.routing";
import { CommonModule } from "@angular/common";

@NgModule({
    imports:[
        DepartmantsRoutingModule,
        CommonModule
    ]
})
export class DepartmentsModule{}